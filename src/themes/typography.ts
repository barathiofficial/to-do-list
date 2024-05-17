import { colors } from '@constants'
import { StyleSheet } from 'react-native'
import { fontFamily } from './fontFamily'

export const typography = StyleSheet.create({
	xxs: {
		fontSize: 10,
		fontFamily: fontFamily.interRegular,
		color: colors.dark
	},
	xs: {
		fontSize: 12,
		fontFamily: fontFamily.interRegular,
		color: colors.dark
	},
	sm: {
		fontSize: 14,
		fontFamily: fontFamily.interRegular,
		color: colors.dark
	},
	md: {
		fontSize: 16,
		fontFamily: fontFamily.interMedium,
		color: colors.dark
	},
	lg: {
		fontSize: 20,
		fontFamily: fontFamily.interBold,
		color: colors.dark
	}
})
