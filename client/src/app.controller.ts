import { Controller, Post, Body, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { IData } from './body';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Post('notification')
  createMessage(@Body() data: IData){
    return this.appService.accumulate(data);
  }

}

