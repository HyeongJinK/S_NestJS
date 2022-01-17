import { Module } from '@nestjs/common';
import { SignUpController } from './sign-up/sign-up.controller';
import { SignInController } from './sign-in/sign-in.controller';
import { SignUpService } from './sign-up/sign-up.service';

@Module({
  controllers: [SignUpController, SignInController],
  providers: [SignUpService],
})
export class UserModule {}
