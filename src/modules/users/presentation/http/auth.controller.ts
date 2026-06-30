import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/lib/auth/current-user.decorator';
import type { AuthenticatedUser } from 'src/lib/auth/authenticated-user';
import { JwtAuthGuard } from 'src/lib/auth/jwt-auth.guard';
import { JwtTokenService } from 'src/lib/auth/jwt-token.service';
import { UsersService } from '../../application/service';
import { Email } from '../../domain/email.vo';
import { RawPassword } from '../../domain/raw-password.vo';
import { UserId } from '../../domain/user-id.vo';
import { AuthResponseDto } from './dto/auth-response.dto';
import { CurrentUserResponseDto } from './dto/current-user.response.dto';
import { LoginUserRequestDto } from './dto/login-user.request.dto';
import { RegisterUserRequestDto } from './dto/register-user.request.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtTokenService: JwtTokenService,
  ) {}

  @Post('register')
  async register(
    @Body() dto: RegisterUserRequestDto,
  ): Promise<AuthResponseDto> {
    const email = Email.create(dto.email);
    const rawPassword = RawPassword.create(dto.password);

    const user = await this.usersService.register(email, rawPassword);

    const accessToken = await this.jwtTokenService.issueAccessToken({
      subject: user.getId().toString(),
      email: user.getEmail().toString(),
    });

    return AuthResponseDto.fromDomain(user, accessToken);
  }

  @Post('login')
  async login(@Body() dto: LoginUserRequestDto): Promise<AuthResponseDto> {
    const email = Email.create(dto.email);
    const rawPassword = RawPassword.create(dto.password);

    const user = await this.usersService.login(email, rawPassword);

    const accessToken = await this.jwtTokenService.issueAccessToken({
      subject: user.getId().toString(),
      email: user.getEmail().toString(),
    });

    return AuthResponseDto.fromDomain(user, accessToken);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async me(
    @CurrentUser() currentUser: AuthenticatedUser,
  ): Promise<CurrentUserResponseDto> {
    const userId = UserId.fromString(currentUser.subject);

    const user = await this.usersService.getCurrentUser(userId);

    return CurrentUserResponseDto.fromDomain(user);
  }
}
