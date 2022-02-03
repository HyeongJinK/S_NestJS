import {
  Controller,
  Get,
  Inject,
  Logger,
  LoggerService,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Banner } from '@app/model/domain/banner/banner.entity';
import { BannerService } from '../service/banner.service';
import { ResponseEntity } from '@app/common/res/ResponseEntity';

@ApiTags('banner')
@Controller('banner')
export class BannerController {
  constructor(
    private bannersService: BannerService,
    @Inject(Logger) private readonly logger: LoggerService,
  ) {}

  @ApiOperation({ summary: 'Get Activated Banners' })
  @Get('/')
  getActiveBanners(
    @Query('group') group: string,
  ): Promise<ResponseEntity<Banner[]>> {
    this.logger.log(`Log use Test`);

    return this.bannersService
      .getActiveBanners(group)
      .then((r) => ResponseEntity.OK_WITH(r));
  }
}
