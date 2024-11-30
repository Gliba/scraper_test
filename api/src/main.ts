import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.NESTJS_APP_DOCKER_PORT;

  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(port ?? 3001);
}
bootstrap();
