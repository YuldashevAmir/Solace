import { INotification } from '../../notification/notification.types'
import { utcToGMT } from './date.util'

export function getResponseTextForNotification(
	notification: INotification,
	GMT_OFFSET: number
): string {
	const reminderTimes = notification?.reminders
		.map((time: Date) => {
			return `- ${new Date(utcToGMT(time, GMT_OFFSET)).toLocaleString()}`
		})
		.join('\n')

	return `✅ <b>${notification?.message}</b>\n
<b>${new Date(notification?.date).toLocaleString()}</b>\n
Напоминания:
${reminderTimes}\n`
}

export function extractFirstJson(text: string): any {
	const match = text.match(/\{[\s\S]*\}/)
	if (!match) throw new Error('JSON not found')
	return JSON.parse(match[0])
}
