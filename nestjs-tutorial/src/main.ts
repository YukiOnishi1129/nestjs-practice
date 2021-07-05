import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Nestアプリケーションのインスタンス生成
  const app = await NestFactory.create(AppModule);
  // HTTPリスナー起動
  await app.listen(3000);
}
bootstrap();
