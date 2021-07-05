import {
  Controller,
  Get,
  Req,
  Post,
  Redirect,
  Query,
  Param,
  Body,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

// @Controller(): コントローラーを定義するデコレータ
@Controller('cats')
export class CatsController {
  // post送信
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return `This action adds a new cat`;
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get('dog')
  // リダイレクト
  @Redirect('http://localhost:3000/', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
