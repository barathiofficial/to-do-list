import Feather from '@expo/vector-icons/Feather'
import colors from '@lib/colors'
import { ripple } from '@lib/themes'
import React from 'react'
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'

type HeaderProps = {
	onIconPress?: () => void
	inputVisible?: boolean
}

export function Header({ onIconPress, inputVisible }: HeaderProps) {
	const rotateAnim = React.useRef(new Animated.Value(0)).current

	const rotate = rotateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '45deg']
	})

	React.useEffect(() => {
		Animated.timing(rotateAnim, {
			toValue: inputVisible ? 1 : 0,
			duration: 100,
			useNativeDriver: true // This is to ensure smooth animation
		}).start()
	}, [inputVisible])

	return (
		<View style={styles.header}>
			<Text style={styles.title}>Tasks</Text>
			<Animated.View style={[styles.iconWrapper, { transform: [{ rotate }] }]}>
				<Pressable
					android_ripple={ripple}
					style={styles.icon}
					onPress={onIconPress}>
					<Feather
						color={colors.dark}
						name='plus'
						size={24}
					/>
				</Pressable>
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: 55,
		backgroundColor: colors.white,
		borderBottomColor: colors.medium,
		borderBottomWidth: 1 / 2,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingHorizontal: 20
	},
	title: {
		color: colors.dark,
		fontSize: 20,
		fontWeight: 'bold'
	},
	iconWrapper: {
		width: 40,
		height: 40,
		borderRadius: 20,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
