import { Controller, Get, HttpCode, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/cats')
export class CatsController {
  @Get()
  @HttpCode(200)
  findAll(@Req() request: Request): string {
    console.log(request.headers);
    return 'This action returns all cats';
  }
}