export function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
	const result = {} as Pick<T, K>

	keys.forEach((key) => {
		result[key] = obj[key]
	})

	return result
}

export function omit<T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
	const result = { ...obj }

	keys.forEach((key) => {
		delete result[key]
	})

	return result
}
