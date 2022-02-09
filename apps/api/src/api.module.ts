import { Module } from '@nestjs/common';
import { realTypeOrmModule } from '../../../libs/model/RealTypeOrmModule';
import { userOrmModule } from '../../../libs/user/UserTypeOrmModule';
import { BannerModule } from './banner/banner.module';
import { ConfigModule } from '@nestjs/config';
import { GlobalExceptionFilter } from '@app/common/filter/global-exception.filter';
import { HealthModule } from './health/health.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env`, `.env.${process.env.NODE_ENV}`],
    }),
    realTypeOrmModule(),
    userOrmModule(),
    HealthModule,
    BannerModule,
    UserModule,
  ],
  providers: [
    {
      provide: 'GLOBAL_EXCEPTION_FILTER',
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class ApiModule {}
