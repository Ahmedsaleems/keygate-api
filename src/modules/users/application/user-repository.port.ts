import { User } from '../domain/user.entity';
import { Email } from '../domain/email.vo';
import { UserId } from '../domain/user-id.vo';

export const USER_REPOSITORY_PORT = Symbol('USER_REPOSITORY_PORT');

export interface UserRepositoryPort {
  create(user: User): Promise<void>;

  findById(userId: UserId): Promise<User | null>;

  findByEmail(email: Email): Promise<User | null>;

  existsByEmail(email: Email): Promise<boolean>;
}