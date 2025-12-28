import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AIClientModule } from '../shared/apiClient/aiClient.module'
import { ConfigModule } from '../shared/config/config.module'
import { NotificationSchema } from './notification.schema'
import { NotificationService } from './notification.service'

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Notification', schema: NotificationSchema },
		]),
		ConfigModule,
		AIClientModule,
	],
	providers: [NotificationService],
	exports: [NotificationService],
})
export class NotificationModule {}
