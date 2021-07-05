import { Controller, Get, Post, Query } from '@nestjs/common';
import { MemoService } from './memo.service';

@Controller('memo')
export class MemoController {
  // MemoコントローラーにMemoサービスを注入して、Memoサービスの関数を利用する
  constructor(private readonly service: MemoService) {}

  // getリクエスト
  @Get()
  getMemoList() {
    return this.service.getMemoList();
  }

  // postリクエスト
  @Post()
  addMemo(@Query() query: { name: string; description: string }) {
    return this.service.addMemo(query.name, query.description);
  }
}
