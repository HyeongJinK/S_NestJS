import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Banner } from '@app/model/domain/banner/banner.entity';

@Entity('banner_group', { database: process.env.DEFAULT_DB_NAME })
export class BannerGroup {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column({ unique: true })
  @Index()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  description: string;

  @OneToMany(() => Banner, (banner) => banner.banner_group)
  @ApiProperty()
  banner: Banner[];

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
}
