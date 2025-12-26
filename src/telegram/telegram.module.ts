// telegram.module.ts
import { Module, forwardRef } from '@nestjs/common'
import { NotificationModule } from '../notification/notification.module'
import { ConfigModule } from '../shared/config/config.module'
import { TelegramService } from './telegram.service'

@Module({
	imports: [ConfigModule, forwardRef(() => NotificationModule)],
	providers: [TelegramService],
	exports: [TelegramService],
})
export class TelegramModule {}
