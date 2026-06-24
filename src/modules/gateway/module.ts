import { Module } from '@nestjs/common';
import {
  API_KEY_RUNTIME_PUBLIC_PORT,
  ApiKeysPublicModule,
  type ApiKeyRuntimePublicPort,
} from '../api-keys/public';
import {
  PROJECT_ENDPOINT_RUNTIME_PUBLIC_PORT,
  ProjectsPublicModule,
  type ProjectEndpointRuntimePublicPort,
} from '../projects/public';
import {
  GATEWAY_HTTP_FORWARDER_PORT,
  type GatewayHttpForwarderPort,
} from './application/http-forwarder.port';
import { GatewayService } from './application/service';
import { GatewayHttpForwarderAdapter } from './infrastructure/http/http-forwarder.adapter';

@Module({
  imports: [ApiKeysPublicModule, ProjectsPublicModule],
  providers: [
    {
      provide: GATEWAY_HTTP_FORWARDER_PORT,
      useClass: GatewayHttpForwarderAdapter,
    },
    {
      provide: GatewayService,
      useFactory: (
        apiKeyRuntime: ApiKeyRuntimePublicPort,
        projectEndpointRuntime: ProjectEndpointRuntimePublicPort,
        httpForwarder: GatewayHttpForwarderPort,
      ) =>
        new GatewayService(
          apiKeyRuntime,
          projectEndpointRuntime,
          httpForwarder,
        ),
      inject: [
        API_KEY_RUNTIME_PUBLIC_PORT,
        PROJECT_ENDPOINT_RUNTIME_PUBLIC_PORT,
        GATEWAY_HTTP_FORWARDER_PORT,
      ],
    },
  ],
  exports: [GatewayService],
})
export class GatewayModule {}