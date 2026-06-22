import { User } from '../../../domain/user.entity';

export class CurrentUserResponseDto {
  id!: string;

  email!: string;

  static fromDomain(user: User): CurrentUserResponseDto {
    return {
      id: user.getId().toString(),
      email: user.getEmail().toString(),
    };
  }
}