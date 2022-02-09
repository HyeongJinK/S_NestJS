import { Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post('/signup')
  signUp(): string {
    return 'signUp';
  }
}
