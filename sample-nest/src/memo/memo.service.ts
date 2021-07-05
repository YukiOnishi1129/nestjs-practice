import { Injectable } from '@nestjs/common';
import { Memo } from 'src/entities/memo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// service層でDB操作を実施する

@Injectable()
export class MemoService {
  constructor(
    // @InjectRepository(Memo): DIコンテナがMemoモデル(entity)からインスタンスを生成し渡してくれる
    // MemoサービスにMemoモデルを注入する
    @InjectRepository(Memo)
    private readonly memoRepository: Repository<Memo>, // Memoモデルを元ORMインスタンスを生成
  ) {}

  addMemo(name: string, description: string) {
    const memo = new Memo();
    memo.name = name;
    memo.description = description;
    // insert処理を実施
    return this.memoRepository.insert(memo);
  }

  getMemoList() {
    return this.memoRepository.find();
  }
}
