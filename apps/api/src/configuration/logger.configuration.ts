import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';

export const customLogger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        utilities.format.nestLike('TR', { prettyPrint: true }),
      ),
    }),
  ],
});
