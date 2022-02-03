import { Logger, Module } from '@nestjs/common';
import { BannerController } from './controller/banner.controller';
import { BannerService } from './service/banner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerGroupRepository } from './repository/banner-group.repository';
import { Banner } from '@app/model/domain/banner/banner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Banner, BannerGroupRepository])],
  controllers: [BannerController],
  providers: [BannerService, Logger],
})
export class BannerModule {}
