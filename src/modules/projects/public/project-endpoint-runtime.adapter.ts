import { Injectable } from '@nestjs/common';
import {
  EndpointMethod as PrismaEndpointMethod,
  EndpointStatus as PrismaEndpointStatus,
} from '../../../lib/prisma/generated';
import { PrismaService } from '../../../lib/database/prisma.service';
import { ProjectEndpointRuntimePublicPort } from './project-endpoint-runtime.public.port';
import {
  RuntimeProjectEndpointResolveParams,
  RuntimeResolvedProjectEndpoint,
} from './project-endpoint-runtime.public.types';

type PathMatchResult = {
  matched: boolean;
  pathParams: Record<string, string>;
};

type MatchedEndpoint = {
  endpoint: {
    id: string;
    projectId: string;
    method: PrismaEndpointMethod;
    path: string;
    upstreamUrl: string;
    status: PrismaEndpointStatus;
    createdAt: Date;
  };
  registeredPath: string;
  pathParams: Record<string, string>;
};

const ALLOWED_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

@Injectable()
export class ProjectEndpointRuntimePublicAdapter implements ProjectEndpointRuntimePublicPort {
  constructor(private readonly prisma: PrismaService) { }

  async resolveEndpoint(
    params: RuntimeProjectEndpointResolveParams,
  ): Promise<RuntimeResolvedProjectEndpoint | null> {
    const method = this.normalizeMethod(params.method);

    if (!method) {
      return null;
    }

    const requestPath = this.normalizePath(params.path);

    if (!requestPath) {
      return null;
    }

    const endpoints = await this.prisma.projectEndpoint.findMany({
      where: {
        projectId: params.projectId,
        method,
      },
      select: {
        id: true,
        projectId: true,
        method: true,
        path: true,
        upstreamUrl: true,
        status: true,
        createdAt: true,
      },
    });

    const matches: MatchedEndpoint[] = [];

    for (const endpoint of endpoints) {
      const registeredPath = this.normalizePath(endpoint.path);

      if (!registeredPath) {
        continue;
      }

      const match = this.matchPath(registeredPath, requestPath);

      if (!match.matched) {
        continue;
      }

      matches.push({
        endpoint,
        registeredPath,
        pathParams: match.pathParams,
      });
    }

    const selectedMatch = this.selectMostSpecificMatch(matches);

    if (!selectedMatch) {
      return null;
    }

    return {
      endpointId: selectedMatch.endpoint.id,
      projectId: selectedMatch.endpoint.projectId,
      method: selectedMatch.endpoint.method,
      registeredPath: selectedMatch.registeredPath,
      requestPath,
      upstreamUrl: selectedMatch.endpoint.upstreamUrl,
      resolvedUpstreamUrl: this.resolveUpstreamUrl(
        selectedMatch.endpoint.upstreamUrl,
        selectedMatch.pathParams,
      ),
      status: selectedMatch.endpoint.status,
      pathParams: selectedMatch.pathParams,
    };
  }

  private normalizeMethod(method: string): PrismaEndpointMethod | null {
    const normalized = method.trim().toUpperCase();

    if (!ALLOWED_METHODS.includes(normalized as PrismaEndpointMethod)) {
      return null;
    }

    return normalized as PrismaEndpointMethod;
  }

  private normalizePath(path: string): string | null {
    const withoutQuery = path.split('?')[0]?.split('#')[0] ?? '';
    const trimmed = withoutQuery.trim();

    if (!trimmed) {
      return null;
    }

    const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;

    if (withLeadingSlash.length > 1 && withLeadingSlash.endsWith('/')) {
      return withLeadingSlash.slice(0, -1);
    }

    if (!withLeadingSlash.startsWith('/') || /\s/.test(withLeadingSlash)) {
      return null;
    }

    return withLeadingSlash;
  }

  private matchPath(
    registeredPath: string,
    requestPath: string,
  ): PathMatchResult {
    const registeredSegments = this.toSegments(registeredPath);
    const requestSegments = this.toSegments(requestPath);

    if (registeredSegments.length !== requestSegments.length) {
      return {
        matched: false,
        pathParams: {},
      };
    }

    const pathParams: Record<string, string> = {};

    for (let index = 0; index < registeredSegments.length; index += 1) {
      const registeredSegment = registeredSegments[index];
      const requestSegment = requestSegments[index];

      if (!registeredSegment || !requestSegment) {
        return {
          matched: false,
          pathParams: {},
        };
      }

      if (registeredSegment.startsWith(':')) {
        const paramName = registeredSegment.slice(1);

        if (!paramName) {
          return {
            matched: false,
            pathParams: {},
          };
        }

        pathParams[paramName] = decodeURIComponent(requestSegment);
        continue;
      }

      if (registeredSegment !== requestSegment) {
        return {
          matched: false,
          pathParams: {},
        };
      }
    }

    return {
      matched: true,
      pathParams,
    };
  }

  private toSegments(path: string): string[] {
    if (path === '/') {
      return [];
    }

    return path.slice(1).split('/');
  }

  private selectMostSpecificMatch(
    matches: MatchedEndpoint[],
  ): MatchedEndpoint | null {
    if (matches.length === 0) {
      return null;
    }

    return [...matches].sort((left, right) => {
      const specificity = this.compareRouteSpecificity(
        left.registeredPath,
        right.registeredPath,
      );

      if (specificity !== 0) {
        return specificity;
      }

      // safety net checks (created time and id string comparison) (if routes registered through pipeline, this may not be reachable)
      const createdAtDifference =
        left.endpoint.createdAt.getTime() - right.endpoint.createdAt.getTime();

      if (createdAtDifference !== 0) {
        return createdAtDifference;
      }

      return left.endpoint.id.localeCompare(right.endpoint.id);
    })[0];
  }

  private compareRouteSpecificity(leftPath: string, rightPath: string): number {
    const leftSegments = this.toSegments(leftPath);
    const rightSegments = this.toSegments(rightPath);

    const staticSegmentDifference =
      this.countStaticSegments(rightSegments) -
      this.countStaticSegments(leftSegments);

    if (staticSegmentDifference !== 0) {
      return staticSegmentDifference;
    }

    for (let index = 0; index < leftSegments.length; index += 1) {
      const leftIsStatic = !this.isParameterSegment(leftSegments[index] ?? '');
      const rightIsStatic = !this.isParameterSegment(
        rightSegments[index] ?? '',
      );

      if (leftIsStatic && !rightIsStatic) {
        return -1;
      }

      if (!leftIsStatic && rightIsStatic) {
        return 1;
      }
    }

    return 0;
  }

  private countStaticSegments(segments: string[]): number {
    return segments.filter((segment) => !this.isParameterSegment(segment))
      .length;
  }

  private isParameterSegment(segment: string): boolean {
    return segment.startsWith(':');
  }

  private resolveUpstreamUrl(
    upstreamUrl: string,
    pathParams: Record<string, string>,
  ): string {
    let resolved = upstreamUrl;

    for (const [key, value] of Object.entries(pathParams)) {
      resolved = resolved.replaceAll(`:${key}`, encodeURIComponent(value));
    }

    return resolved;
  }
}
