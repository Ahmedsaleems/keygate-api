import { Email } from './email.vo';
import { PasswordHash } from './password-hash.vo';
import { UserId } from './user-id.vo';

type CreateUserProps = {
  email: Email;
  passwordHash: PasswordHash;
};

type RehydrateUserProps = {
  id: UserId;
  email: Email;
  passwordHash: PasswordHash;
  createdAt: Date;
  updatedAt: Date;
};

export class User {
  private constructor(
    private readonly id: UserId,
    private readonly email: Email,
    private readonly passwordHash: PasswordHash,
    private readonly createdAt: Date,
    private readonly updatedAt: Date,
  ) {}

  static create(props: CreateUserProps): User {
    const now = new Date();

    return new User(
      UserId.create(),
      props.email,
      props.passwordHash,
      now,
      now,
    );
  }

  static rehydrate(props: RehydrateUserProps): User {
    return new User(
      props.id,
      props.email,
      props.passwordHash,
      props.createdAt,
      props.updatedAt,
    );
  }

  getId(): UserId {
    return this.id;
  }

  getEmail(): Email {
    return this.email;
  }

  getPasswordHash(): PasswordHash {
    return this.passwordHash;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }
}