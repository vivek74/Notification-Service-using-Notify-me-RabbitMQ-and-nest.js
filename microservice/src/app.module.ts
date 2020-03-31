import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { DatabaseModule } from '../database/database.module';
import { UserModule } from '../src/user/user.module';
import { NotificationModule } from '../src/notification/notification.module';

@Global()
@Module({
  imports: [UserModule, ConfigModule, DatabaseModule, NotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}