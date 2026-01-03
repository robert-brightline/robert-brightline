import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { PmsModule } from '../lib/pms.module.js';

export async function main() {
  const app = await NestFactory.create(PmsModule);
  const PORT = process.env.PORT ?? 3000;

  app.enableCors();
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('IMS API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);

  Logger.log(`Up and running at ${await app.getUrl()}`, 'Ims Bootstra');
}

main();
