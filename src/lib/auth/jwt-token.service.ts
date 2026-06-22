import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticatedUser } from './authenticated-user';
import { AuthConfig } from './auth.config';

type JwtAccessTokenPayload = {
  sub: string;
  email?: string;
};

type IssueAccessTokenParams = {
  subject: string;
  email?: string;
};

@Injectable()
export class JwtTokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: AuthConfig,
  ) {}

  async issueAccessToken(params: IssueAccessTokenParams): Promise<string> {
    const payload: JwtAccessTokenPayload = {
      sub: params.subject,
      email: params.email,
    };

    return this.jwtService.signAsync(payload, {
      secret: this.config.secret,
      expiresIn: this.config.expiresIn as any,
    });
  }

  async verifyAccessToken(token: string): Promise<AuthenticatedUser> {
    const payload = await this.jwtService.verifyAsync<JwtAccessTokenPayload>(
      token,
      {
        secret: this.config.secret,
      },
    );

    return {
      subject: payload.sub,
      email: payload.email,
    };
  }
}