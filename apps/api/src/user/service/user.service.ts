import { Injectable } from '@nestjs/common';
import { User } from '@app/user/domain/user/user.entity';

@Injectable()
export class UserService {
  async signUp(user: User) {
    return user;
  }
}
