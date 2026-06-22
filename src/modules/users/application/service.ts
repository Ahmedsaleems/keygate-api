import { PasswordHasherPort } from 'src/lib/security/password-hasher.port';
import { User } from '../domain/user.entity';
import { Email } from '../domain/email.vo';
import { PasswordHash } from '../domain/password-hash.vo';
import { UserId } from '../domain/user-id.vo';
import { InvalidCredentialsError } from './error';
import { UserAlreadyExistsError } from './error';
import { UserNotFoundError } from './error';
import { UserRepositoryPort } from './user-repository.port';

export class UsersService {
  constructor(
    private readonly userRepository: UserRepositoryPort,
    private readonly passwordHasher: PasswordHasherPort,
  ) {}

  async register(email: Email, rawPassword: string): Promise<User> {
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

  async login(email: Email, rawPassword: string): Promise<User> {
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

  async getCurrentUser(userId: UserId): Promise<User> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new UserNotFoundError(userId.toString());
    }

    return user;
  }
}