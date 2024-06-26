import { colors, gloablStyles, ripple } from '@/themes'
import { Pressable, StyleSheet, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

type FloatingButtonProps = {
	onPress?: () => void
}

export function FloatingButton(props: FloatingButtonProps) {
	return (
		<View style={[styles.container, gloablStyles.shadow]}>
			<Pressable
				android_ripple={ripple.dark}
				style={styles.button}
				onPress={props.onPress}>
				<Feather
					color={colors.white}
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
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: colors.button.addTask.darkTeal,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden'
	},
	button: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
