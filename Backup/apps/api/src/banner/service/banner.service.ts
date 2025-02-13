import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Banner } from '@app/model/domain/banner/banner.entity';
import { BannerGroupRepository } from '../repository/banner-group.repository';

@Injectable()
export class BannerService {
  constructor(
    @InjectRepository(BannerGroupRepository)
    private bannerGroupRepository: BannerGroupRepository,
  ) {}

  async getActiveBanners(group: string): Promise<Banner[]> {
    const bannerGroup = await this.bannerGroupRepository.getActiveBanners(
      group,
    );

    if (bannerGroup === undefined) {
      return [];
    }

    return bannerGroup.banners;
  }
}
