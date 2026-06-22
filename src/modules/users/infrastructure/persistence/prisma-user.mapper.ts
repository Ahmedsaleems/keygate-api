import { User as PrismaUser } from '../../../../lib/prisma/generated';
import { User } from '../../domain/user.entity';
import { Email } from '../../domain/email.vo';
import { PasswordHash } from '../../domain/password-hash.vo';
import { UserId } from '../../domain/user-id.vo';

export class PrismaUserMapper {
  static toDomain(record: PrismaUser): User {
    return User.rehydrate({
      id: UserId.fromString(record.id),
      email: Email.create(record.email),
      passwordHash: PasswordHash.create(record.passwordHash),
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }

  static toPersistence(user: User): PrismaUser {
    return {
      id: user.getId().toString(),
      email: user.getEmail().toString(),
      passwordHash: user.getPasswordHash().toString(),
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
    };
  }
}