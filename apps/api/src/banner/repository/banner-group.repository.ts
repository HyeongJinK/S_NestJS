import { EntityRepository, Repository } from 'typeorm';
import { BannerGroup } from '@app/model/domain/banner/banner-group.entity';

@EntityRepository(BannerGroup)
export class BannerGroupRepository extends Repository<BannerGroup> {
  async getActiveBanners(group: string, admin = false): Promise<BannerGroup> {
    let bannerStatusQuery = "banner.status = 'ACTIVE'";

    if (admin) {
      bannerStatusQuery += " OR banner.status = 'ADMIN'";
    }

    return this.createQueryBuilder('bannerGroup')
      .leftJoinAndSelect('bannerGroup.banners', 'banner', bannerStatusQuery)
      .where(
        'bannerGroup.name = :group ' +
          'and (banner.openAt is null or banner.openAt >= now()) ' +
          'and (banner.closeAt is null or banner.closeAt <= now())',
        { group },
      )
      .orderBy({ 'banner.orderNum': 'ASC' })
      .getOne();
  }
}
