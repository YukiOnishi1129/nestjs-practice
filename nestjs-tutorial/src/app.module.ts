import { Module } from '@nestjs/common';
/* controllers */
import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
/* services */
import { AppService } from './app.service';

@Module({
  imports: [],
  // controllerを定義
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
