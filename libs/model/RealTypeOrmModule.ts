import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as path from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

export function realTypeOrmModule() {
  const entityPath = path.join(__dirname, 'src/domain/**/*.entity.ts');
  return TypeOrmModule.forRootAsync({
    name: 'default',
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      return {
        type: 'postgres',
        host: configService.get('TR_DB_HOST'),
        username: configService.get('TR_DB_USER'),
        password: configService.get('TR_DB_PASS'),
        database: configService.get('TR_DB_NAME'),
        port: configService.get('TR_DB_PORT'),
        entities: [entityPath],
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
        keepConnectionAlive: true,
        namingStrategy: new SnakeNamingStrategy(),
      };
    },
  });
}
