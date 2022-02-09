import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BannerGroup } from '@app/model/domain/banner/banner-group.entity';
import { BannerLinkType } from '@app/model/domain/banner/enumable/banner-link-type.enum';
import { BannerStatus } from '@app/model/domain/banner/enumable/banner-status.enum';
import { BaseTimeEntity } from '@app/model/domain/BaseTimeEntity';

@Entity('banner', { database: process.env.DEFAULT_DB_NAME })
export class Banner extends BaseTimeEntity{
  @ManyToOne(() => BannerGroup, (bannerGroup) => bannerGroup.id)
  @ApiProperty()
  @JoinColumn({ name: 'banner_group_id' })
  banner_group: BannerGroup;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  description: string;

  @Column()
  @ApiProperty()
  image_url: string;

  @Column({
    nullable: true,
  })
  @ApiProperty()
  open_at: Date;

  @Column({
    nullable: true,
  })
  @ApiProperty()
  close_at: Date;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: BannerStatus,
    default: BannerStatus.ACTIVE,
  })
  status: BannerStatus;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: BannerLinkType,
    default: BannerLinkType.APP,
  })
  link_type: BannerLinkType;

  @Column({ nullable: true })
  @ApiProperty()
  link_url: string;

  @Column({ nullable: true })
  @ApiProperty()
  order_num: number;
}
