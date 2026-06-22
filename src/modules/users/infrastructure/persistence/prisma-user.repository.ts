import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../lib/database/prisma.service';
import { UserRepositoryPort } from '../../application/user-repository.port';
import { User } from '../../domain/user.entity';
import { Email } from '../../domain/email.vo';
import { UserId } from '../../domain/user-id.vo';
import { PrismaUserMapper } from './prisma-user.mapper';

@Injectable()
export class PrismaUserRepository implements UserRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const persistenceUser = PrismaUserMapper.toPersistence(user);

    await this.prisma.user.create({
      data: {
        id: persistenceUser.id,
        email: persistenceUser.email,
        passwordHash: persistenceUser.passwordHash,
        createdAt: persistenceUser.createdAt,
        updatedAt: persistenceUser.updatedAt,
      },
    });
  }

  async findById(userId: UserId): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId.toString(),
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  async findByEmail(email: Email): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email.toString(),
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  async existsByEmail(email: Email): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email.toString(),
      },
      select: {
        id: true,
      },
    });

    return user !== null;
  }
}