import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Banner } from '@app/model/domain/banner/banner.entity';
import { BaseTimeEntity } from '@app/model/domain/BaseTimeEntity';

@Entity('banner_group', { database: process.env.DEFAULT_DB_NAME })
export class BannerGroup extends BaseTimeEntity{
  @Column({ unique: true })
  @Index()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  description: string;

  @OneToMany(() => Banner, (banner) => banner.bannerGroup)
  @ApiProperty()
  banners: Banner[];
}
