import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthMiddleware } from './auth/auth.middleware'; 
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(new AuthMiddleware().use);
  app.useGlobalPipes(new ValidationPipe({}));

  await app.listen(3000);
}
bootstrap();
