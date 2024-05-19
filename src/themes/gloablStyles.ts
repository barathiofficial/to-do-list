import { StyleSheet } from 'react-native'

export const gloablStyles = StyleSheet.create({
	container: {
		flex: 1
	},
	shadow: {
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
