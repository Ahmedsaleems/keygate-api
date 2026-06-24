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

const ALLOWED_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

@Injectable()
export class ProjectEndpointRuntimePublicService
  implements ProjectEndpointRuntimePublicPort
{
  constructor(private readonly prisma: PrismaService) {}

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
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    for (const endpoint of endpoints) {
      const registeredPath = this.normalizePath(endpoint.path);

      if (!registeredPath) {
        continue;
      }

      const match = this.matchPath(registeredPath, requestPath);

      if (!match.matched) {
        continue;
      }

      return {
        endpointId: endpoint.id,
        projectId: endpoint.projectId,
        method: endpoint.method,
        registeredPath,
        requestPath,
        upstreamUrl: endpoint.upstreamUrl,
        resolvedUpstreamUrl: this.resolveUpstreamUrl(
          endpoint.upstreamUrl,
          match.pathParams,
        ),
        status: endpoint.status,
        pathParams: match.pathParams,
      };
    }

    return null;
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