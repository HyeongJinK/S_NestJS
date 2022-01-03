import { Module } from '@nestjs/common';
import { SigninController } from './signin/signin.controller';
import { SignupController } from './signup/signup.controller';

@Module({
  controllers: [SigninController, SignupController]
})
export class UserModule {}
