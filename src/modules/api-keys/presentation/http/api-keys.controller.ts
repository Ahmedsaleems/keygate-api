import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import type { AuthenticatedUser } from 'src/lib/auth/authenticated-user';
import { CurrentUser } from 'src/lib/auth/current-user.decorator';
import { JwtAuthGuard } from 'src/lib/auth/jwt-auth.guard';
import { ApiKeysService } from '../../application/api-key.service';
import { ApiKeyId } from '../../domain/api-key-id.vo';
import { ApiKeyName } from '../../domain/api-key-name.vo';
import { ApiKeyOwnerId } from '../../domain/owner-id.vo';
import { ApiKeyProjectId } from '../../domain/project-id.vo';
import { ApiKeyResponseDto } from './dto/api-key.response.dto';
import { CreateApiKeyRequestDto } from './dto/create-api-key.request.dto';
import { CreateApiKeyResponseDto } from './dto/create-api-key.response.dto';

@Controller('projects/:projectId/api-keys')
@UseGuards(JwtAuthGuard)
export class ApiKeysController {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  @Post()
  async createApiKey(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
    @Body() dto: CreateApiKeyRequestDto,
  ): Promise<CreateApiKeyResponseDto> {
    const issuedApiKey = await this.apiKeysService.createApiKey(
      ApiKeyOwnerId.fromString(currentUser.subject),
      ApiKeyProjectId.fromString(projectIdParam),
      ApiKeyName.create(dto.name),
    );

    return CreateApiKeyResponseDto.fromDomain(issuedApiKey);
  }

  @Get()
  async listApiKeys(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
  ): Promise<ApiKeyResponseDto[]> {
    const apiKeys = await this.apiKeysService.listApiKeys(
      ApiKeyOwnerId.fromString(currentUser.subject),
      ApiKeyProjectId.fromString(projectIdParam),
    );

    return ApiKeyResponseDto.fromDomainList(apiKeys);
  }

  @Get(':apiKeyId')
  async getApiKey(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
    @Param('apiKeyId') apiKeyIdParam: string,
  ): Promise<ApiKeyResponseDto> {
    const apiKey = await this.apiKeysService.getApiKey(
      ApiKeyOwnerId.fromString(currentUser.subject),
      ApiKeyProjectId.fromString(projectIdParam),
      ApiKeyId.fromString(apiKeyIdParam),
    );

    return ApiKeyResponseDto.fromDomain(apiKey);
  }

  @Patch(':apiKeyId/revoke')
  async revokeApiKey(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
    @Param('apiKeyId') apiKeyIdParam: string,
  ): Promise<ApiKeyResponseDto> {
    const apiKey = await this.apiKeysService.revokeApiKey(
      ApiKeyOwnerId.fromString(currentUser.subject),
      ApiKeyProjectId.fromString(projectIdParam),
      ApiKeyId.fromString(apiKeyIdParam),
    );

    return ApiKeyResponseDto.fromDomain(apiKey);
  }
}