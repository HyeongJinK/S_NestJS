import { User } from '@app/user/domain/user/user.entity';

export class SignUpDto {
  readonly email: string;
  readonly password: string;

  toEntity(): User {
    return new User(this.email, this.password);
  }
}