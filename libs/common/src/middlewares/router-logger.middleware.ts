import { Request, Response, NextFunction } from 'express';
import * as winston from 'winston';
import { utilities } from 'nest-winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        utilities.format.nestLike('URL', { prettyPrint: true }),
      ),
    }),
  ],
});

export function RouterLoggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  logger.debug(`${req.method} ${req.originalUrl}`);
  next();
}
