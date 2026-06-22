import { Module } from '@nestjs/common';
import { PasswordHashingModule } from 'src/lib/security/module';
import { RegisterUserService } from "./application/register-user.service";
import { LoginUserService } from "./application/login-user.service";
import { GetUserService } from "./application/get-user.service";
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


@Module({
    imports: [PasswordHashingModule, DatabaseModule, JwtAuthModule],
    controllers: [AuthController],
    providers: [
        {
            provide: USER_REPOSITORY_PORT,
            useClass: PrismaUserRepository,
        },
        {
            provide: RegisterUserService,
            useFactory: (
                userRepository: UserRepositoryPort,
                passwordHasher: PasswordHasherPort,
            ) => new RegisterUserService(userRepository, passwordHasher),
            inject: [USER_REPOSITORY_PORT, PASSWORD_HASHER_PORT],
        },
        {
            provide: LoginUserService,
            useFactory: (
                userRepository: UserRepositoryPort,
                passwordHasher: PasswordHasherPort,
            ) => new LoginUserService(userRepository, passwordHasher),
            inject: [USER_REPOSITORY_PORT, PASSWORD_HASHER_PORT],
        },
        {
            provide: GetUserService,
            useFactory: (userRepository: UserRepositoryPort) =>
                new GetUserService(userRepository),
            inject: [USER_REPOSITORY_PORT],
        },
    ],
    exports: [
    USER_REPOSITORY_PORT,
    RegisterUserService,
    LoginUserService,
    GetUserService,
  ],
})
export class UsersModule { }