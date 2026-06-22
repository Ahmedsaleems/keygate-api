import { PasswordHasherPort } from 'src/lib/security/password-hasher.port';
import { User } from '../domain/user.entity';
import { Email } from '../domain/email.vo';
import { PasswordHash } from '../domain/password-hash.vo';
import { UserAlreadyExistsError } from './error';
import { UserRepositoryPort } from './user-repository.port';

export class RegisterUserService {
  constructor(
    private readonly userRepository: UserRepositoryPort,
    private readonly passwordHasher: PasswordHasherPort,
  ) {}

  async execute(email: Email, rawPassword: string): Promise<User> {
    const userExists = await this.userRepository.existsByEmail(email);

    if (userExists) {
      throw new UserAlreadyExistsError(email.toString());
    }

    const hashedPassword = await this.passwordHasher.hash(rawPassword);
    const passwordHash = PasswordHash.create(hashedPassword);

    const user = User.create({
      email,
      passwordHash,
    });

    await this.userRepository.create(user);

    return user;
  }
}