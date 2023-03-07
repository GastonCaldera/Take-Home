import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(config.port);
}
bootstrap();
