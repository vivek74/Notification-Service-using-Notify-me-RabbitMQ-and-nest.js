import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { IData } from './body';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://localhost:5672`],
        queue: 'notification_queue',
        queueOptions: { durable: false },
      },
    });
  }

  public accumulate(data: IData) {
    return this.client.send('notification', data);
  }
}
