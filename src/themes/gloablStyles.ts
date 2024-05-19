import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const gloablStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.light
	},
	shadow: {
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	}
})
