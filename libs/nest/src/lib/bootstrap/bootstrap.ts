import type { Type } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

export async function bootstrap(module: Type) {
  const app = await NestFactory.create(module);
  const PORT = process.env.PORT ?? 3000;

  const config = app.get(ConfigService);

  const APP_NAME = config.get('APP_NAME', 'App name');
  const APP_DESCRIPTION = config.get('APP_DESCRIPTION', 'App description');
  const APP_VERSION = config.get('APP_VERSION', '0.0.1');

  app.enableCors();
  app.use(helmet());

  const swaggerConfig = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription(APP_DESCRIPTION)
    .setVersion(APP_VERSION)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);

  Logger.log(`Up and running at ${await app.getUrl()}`, 'Ims Bootstra');
}
