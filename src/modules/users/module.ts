import { Module } from '@nestjs/common';
import { PasswordHashingModule } from 'src/lib/security/module';
import {
    USER_REPOSITORY_PORT,
    UserRepositoryPort,
} from './application/user-repository.port';
import {
    PASSWORD_HASHER_PORT,
    PasswordHasherPort,
} from '../../lib/security/password-hasher.port';
import { PrismaUserRepository } from './infrastructure/persistence/prisma-user.repository';
import { DatabaseModule } from 'src/lib/database/module';
import { AuthController } from './presentation/http/auth.controller';
import { JwtAuthModule } from 'src/lib/auth/auth.module';
import { UsersService } from './application/service';


@Module({
    imports: [PasswordHashingModule, DatabaseModule, JwtAuthModule],
    controllers: [AuthController],
    providers: [
        {
            provide: USER_REPOSITORY_PORT,
            useClass: PrismaUserRepository,
        },
        {
            provide: UsersService,
            useFactory: (
                userRepository: UserRepositoryPort,
                passwordHasher: PasswordHasherPort,
            ) => new UsersService(userRepository, passwordHasher),
            inject: [USER_REPOSITORY_PORT, PASSWORD_HASHER_PORT],
        },
    ],
    exports: [
        USER_REPOSITORY_PORT,
        UsersService,
    ],
})
export class UsersModule { }