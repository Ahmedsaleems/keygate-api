import { User } from '../../../domain/user.entity';

export class AuthResponseDto {
  accessToken!: string;

  user!: {
    id: string;
    email: string;
  };

  static fromDomain(user: User, accessToken: string): AuthResponseDto {
    return {
      accessToken,
      user: {
        id: user.getId().toString(),
        email: user.getEmail().toString(),
      },
    };
  }
}