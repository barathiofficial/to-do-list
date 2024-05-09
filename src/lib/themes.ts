import { PixelRatio, StyleSheet } from 'react-native'
import colors from './colors'

export const ripple = {
	color: colors.ripple,
	borderless: false
}

export const sizes = {
	taskItemHeight: 50,
	headerHeight: 55,
	borderWidth: PixelRatio.roundToNearestPixel(1 / 2)
}

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

export const gloablStyles = StyleSheet.create({
	shadow: {
		shadowColor: colors.shadow,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	iconWrapperSmall: {
		width: 30,
		height: 30,
		borderRadius: 15,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconWrapper: {
		width: 40,
		height: 40,
		borderRadius: 20,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconPressable: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
})
