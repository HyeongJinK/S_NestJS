import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TestController } from './test/test.controller';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';
import { User.SigninController } from './user.signin/user.signin.controller';

@Module({
  imports: [CatsModule, UserModule],
  controllers: [AppController, CatsController, TestController],
  providers: [AppService],
})
export class AppModule {}
