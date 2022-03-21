import { Controller, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { SignUpDto } from './dto/sign_up.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/signup')
  signUp(user: SignUpDto): string {
    this.userService.signUp(user.toEntity()).then((r) => {
      console.log(r);
    });
    return 'signUp';
  }
}
