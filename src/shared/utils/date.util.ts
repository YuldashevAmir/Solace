export function formatReminderTimes(reminderTimes: Date[]): string {
	return reminderTimes
		.map(time => {
			return `${new Date(time).toLocaleString()}`
		})
		.join('\n')
}
