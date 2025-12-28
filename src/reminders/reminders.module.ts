import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ScheduleModule } from '@nestjs/schedule'
import { NotificationModule } from '../notification/notification.module'
import { NotificationSchema } from '../notification/notification.schema'
import { TelegramModule } from '../telegram/telegram.module'
import { ReminderScheduler } from './reminder.scheduler'

@Module({
	imports: [
		ScheduleModule,
		MongooseModule.forFeature([
			{ name: 'Notification', schema: NotificationSchema },
		]),
		NotificationModule,
		TelegramModule,
	],
	providers: [ReminderScheduler],
})
export class RemindersModule {}
