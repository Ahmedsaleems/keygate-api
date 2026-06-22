import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthConfig } from './auth.config';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtTokenService } from './jwt-token.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [AuthConfig, JwtTokenService, JwtAuthGuard],
  exports: [JwtTokenService, JwtAuthGuard],
})
export class JwtAuthModule {}