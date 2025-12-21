import { INotification } from 'src/notification/notification.types'

export function getFormattedText(notificationDto: INotification): string {
	// Generate reminder times as plain text
	const reminderTimes = notificationDto?.reminders
		.map((time: Date) => {
			return `- ${new Date(time).toLocaleString()}`
		})
		.join('\n') // Joining with newline characters for each reminder

	// Return the formatted response without using unsupported <ul> or <li>
	return `✅ <b>${notificationDto?.message}</b>\n
<b>${new Date(notificationDto?.date).toLocaleString()}</b>\n
Напоминания:
${reminderTimes} \n`
}
