import { Module } from '@nestjs/common';
import { SignInController } from './sign-in/signInController';
import { SignUpController } from './sign-up/signUp.controller';
import { SignInService } from './sign-in/sign-in.service';

@Module({
  controllers: [SignInController, SignUpController],
  providers: [SignInService]
})
export class UserModule {}
