import { colors } from '@constants'
import { StyleSheet } from 'react-native'

export const typography = StyleSheet.create({
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
