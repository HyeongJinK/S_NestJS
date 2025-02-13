import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { GlobalExceptionFilter } from '@app/common/filter/global-exception.filter';
import helmet from 'helmet';
import { originalCorsConfigure } from './configuration/cors.configuration';
import { customLogger } from './configuration/logger.configuration';
import { swaggerConfiguration } from './configuration/swagger.configuration';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule, {
    logger: customLogger,
  });

  app.use(helmet());
  app.enableCors(originalCorsConfigure());

  if (process.env.NODE_ENV !== 'production') {
    // app.use(RouterLoggerMiddleware);
    swaggerConfiguration(app);
  }

  app.useGlobalFilters(new GlobalExceptionFilter());

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
