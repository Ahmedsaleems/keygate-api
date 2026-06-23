import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import type { AuthenticatedUser } from 'src/lib/auth/authenticated-user';
import { CurrentUser } from 'src/lib/auth/current-user.decorator';
import { JwtAuthGuard } from 'src/lib/auth/jwt-auth.guard';
import { ApiKeysService } from '../../application/api-key.service';
import { ApiKeyId } from '../../domain/api-key-id.vo';
import { ApiKeyOwnerId } from '../../domain/owner-id.vo';
import { ApiKeyProjectId } from '../../domain/project-id.vo';
import { ApiKeyProjectEndpointId } from '../../domain/project-endpoint-id.vo';
import { ApiKeyEndpointPermissionResponseDto } from './dto/endpoint-permission.response.dto';

@Controller('projects/:projectId/api-keys/:apiKeyId/endpoints')
@UseGuards(JwtAuthGuard)
export class ApiKeyEndpointPermissionsController {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  @Post(':endpointId')
  async assignEndpointPermission(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
    @Param('apiKeyId') apiKeyIdParam: string,
    @Param('endpointId') endpointIdParam: string,
  ): Promise<ApiKeyEndpointPermissionResponseDto> {
    const permission = await this.apiKeysService.assignEndpointPermission(
      ApiKeyOwnerId.fromString(currentUser.subject),
      ApiKeyProjectId.fromString(projectIdParam),
      ApiKeyId.fromString(apiKeyIdParam),
      ApiKeyProjectEndpointId.fromString(endpointIdParam),
    );

    return ApiKeyEndpointPermissionResponseDto.fromDomain(permission);
  }

  @Get()
  async listEndpointPermissions(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
    @Param('apiKeyId') apiKeyIdParam: string,
  ): Promise<ApiKeyEndpointPermissionResponseDto[]> {
    const permissions = await this.apiKeysService.listEndpointPermissions(
      ApiKeyOwnerId.fromString(currentUser.subject),
      ApiKeyProjectId.fromString(projectIdParam),
      ApiKeyId.fromString(apiKeyIdParam),
    );

    return ApiKeyEndpointPermissionResponseDto.fromDomainList(permissions);
  }

  @Delete(':endpointId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeEndpointPermission(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
    @Param('apiKeyId') apiKeyIdParam: string,
    @Param('endpointId') endpointIdParam: string,
  ): Promise<void> {
    await this.apiKeysService.removeEndpointPermission(
      ApiKeyOwnerId.fromString(currentUser.subject),
      ApiKeyProjectId.fromString(projectIdParam),
      ApiKeyId.fromString(apiKeyIdParam),
      ApiKeyProjectEndpointId.fromString(endpointIdParam),
    );
  }
}