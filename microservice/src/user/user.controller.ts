import { Controller, Get, Header } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getUser')
  @Header('Content-Type', 'text/html')
  getHello(): string {
    console.log('hey')
    return this.userService.getHello();
  }
}
