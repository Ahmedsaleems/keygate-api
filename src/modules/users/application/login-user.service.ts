import { PasswordHasherPort } from 'src/lib/security/password-hasher.port';
import { User } from '../domain/user.entity';
import { Email } from '../domain/email.vo';
import { InvalidCredentialsError } from './error';
import { UserRepositoryPort } from './user-repository.port';

export class LoginUserService {
  constructor(
    private readonly userRepository: UserRepositoryPort,
    private readonly passwordHasher: PasswordHasherPort,
  ) {}

  async execute(email: Email, rawPassword: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    const isPasswordValid = await this.passwordHasher.verify(
      rawPassword,
      user.getPasswordHash().toString(),
    );

    if (!isPasswordValid) {
      throw new InvalidCredentialsError();
    }

    return user;
  }
}