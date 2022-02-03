import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function swaggerConfiguration(app) {
  const option = new DocumentBuilder()
    .setTitle('TodayRecycle Backend API')
    .setDescription('TodayRecycle Server API Documentation')
    .setVersion('1.0.0')
    .addTag('Oysterable')
    .addBearerAuth(
      {
        in: 'header',
        name: 'Authorization',
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'JWT',
    )
    .build();
  const document = SwaggerModule.createDocument(app, option);
  SwaggerModule.setup('api', app, document);
}
