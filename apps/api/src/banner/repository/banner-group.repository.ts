import { EntityRepository, Repository } from 'typeorm';
import { BannerGroup } from '@app/model/domain/banner/banner-group.entity';

@EntityRepository(BannerGroup)
export class BannerGroupRepository extends Repository<BannerGroup> {
  async getActiveBanners(group: string): Promise<BannerGroup> {
    return this.createQueryBuilder('banner_group')
      .leftJoinAndSelect(
        'banner_group.banner',
        'banner',
        "banner.status = 'ACTIVE'",
      )
      .where('banner_group.name = :group', { group })
      .orderBy({ 'banner.order_num': 'ASC' })
      .getOne();
  }
}
