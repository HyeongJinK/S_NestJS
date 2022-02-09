import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  async signUp(user: any) {
    return user;
  }
}
