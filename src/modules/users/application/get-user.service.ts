import { User } from '../domain/user.entity';
import { UserId } from '../domain/user-id.vo';
import { UserNotFoundError } from './error';
import { UserRepositoryPort } from './user-repository.port';

export class GetUserService {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(userId: UserId): Promise<User> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new UserNotFoundError(userId.toString());
    }

    return user;
  }
}