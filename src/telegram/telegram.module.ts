import { Module } from '@nestjs/common'
import { NotificationModule } from 'src/notification/notification.module'
import { ConfigModule } from 'src/shared/config/config.module'
import { TelegramService } from './telegram.service'

@Module({
	imports: [ConfigModule, NotificationModule],
	providers: [TelegramService],
	exports: [TelegramService],
})
export class TelegramModule {}
