import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  exports: [TypeOrmModule],
  providers: [],
  controllers: [],
})
export class UserModule {}
