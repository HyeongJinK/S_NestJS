import { Module } from '@nestjs/common';
import { realTypeOrmModule } from '../../../libs/model/RealTypeOrmModule';
import { machineOrmModule } from '../../../libs/machine/RealTypeOrmModule';
import { BannerModule } from './banner/banner.module';
import { ConfigModule } from '@nestjs/config';
import { GlobalExceptionFilter } from '@app/common/filter/global-exception.filter';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    realTypeOrmModule(),
    machineOrmModule(),
    HealthModule,
    BannerModule,
  ],
  providers: [
    {
      provide: 'GLOBAL_EXCEPTION_FILTER',
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class ApiModule {}
