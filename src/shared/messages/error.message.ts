export const ERROR_REASONS = {
	DEFAULT: 'Извините, что-то пошло не так',
	AI_API: 'Ошибка при обращении к ИИ сервису',
	INVALID_INPUT: 'Неверный формат ввода',
} as const

export type ErrorMessageKey = keyof typeof ERROR_REASONS
