import { colors } from '@constants'
import { StyleSheet } from 'react-native'

export const typography = StyleSheet.create({
	xxs: {
		fontSize: 10,
		fontWeight: '400',
		color: colors.dark
	},
	xs: {
		fontSize: 12,
		fontWeight: '400',
		color: colors.dark
	},
	sm: {
		fontSize: 14,
		fontWeight: '400',
		color: colors.dark
	},
	md: {
		fontSize: 16,
		fontWeight: '500',
		color: colors.dark
	},
	lg: {
		fontSize: 20,
		fontWeight: '700',
		color: colors.dark
	}
})
