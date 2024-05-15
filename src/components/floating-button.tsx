import { colors } from '@constants'
import { Feather } from '@expo/vector-icons'
import { gloablStyles, ripple, sizes } from '@themes'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

type FloatingButtonProps = {
	onPress?: () => void
}

export function FloatingButton(props: FloatingButtonProps) {
	return (
		<View style={[styles.container, gloablStyles.shadow]}>
			<Pressable
				android_ripple={ripple}
				style={styles.button}
				onPress={props.onPress}>
				<Feather
					color={colors.medium}
					name='plus'
					size={24}
				/>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 20,
		right: 20,
		backgroundColor: colors.white,
		width: 60,
		height: 60,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: sizes.borderWidth,
		borderColor: colors.light,
		overflow: 'hidden'
	},
	button: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
