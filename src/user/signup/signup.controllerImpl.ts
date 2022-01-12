import { SignupController } from './signup.controller';
import { Controller, Get } from '@nestjs/common';

@Controller('signup')
export class SignupControllerImpl implements SignupController{
  @Get()
  signup(): string {
    return 'signUp';
  }
}
