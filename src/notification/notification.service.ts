import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { aiClientService } from '../shared/apiClient/aiClient.service'
import { Notification } from './notification.schema'
import { INotification } from './notification.types'

@Injectable()
export class NotificationService {
	constructor(
		@InjectModel(Notification.name)
		private readonly notificationModel: Model<Notification>,
		private readonly aiClient: aiClientService
	) {}

	async addNotification(
		userMessage: string,
		chatId: string,
		GMT_OFFSET: number
	): Promise<INotification> {
		const notificationDto = await this.aiClient.getAIResponse(
			userMessage,
			chatId,
			GMT_OFFSET
		)

		if (!notificationDto) {
			throw new Error('Failed to get a valid response from AI service')
		}

		await this.notificationModel.insertOne(notificationDto)

		return notificationDto
	}

	async findAll(): Promise<Notification[]> {
		return this.notificationModel.find().exec()
	}
}
