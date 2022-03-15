import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola mundo';
  }

  @Get('nuevo')
  newEnpoind() {
    return 'I´m new';
  }

  @Get('/hello/')
  hello() {
    return 'Hola con /sas/';
  }
}
