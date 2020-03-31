import { Controller, Get, Logger } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { MessagePattern } from '@nestjs/microservices';
import { IData } from "./body";

@Controller()
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @MessagePattern('notification')
  async accumulate(data: IData) {
    return this.notificationService.accumulate(data);
  }
}
