import { router } from 'expo-router'

export function goTo(screen: string) {
	return function () {
		router.push(screen)
	}
}
