import { Module } from '@nestjs/common';
import { SigninController } from './signin/signin.controller';
import { SignupControllerImpl } from './signup/signup.controllerImpl';

@Module({
  controllers: [SigninController, SignupControllerImpl]
})
export class UserModule {}
