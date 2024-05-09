import Feather from '@expo/vector-icons/Feather'
import colors from '@lib/colors'
import { gloablStyles, ripple, sizes, typography } from '@lib/themes'
import React from 'react'
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'

type HeaderProps = {
	onIconPress?: () => void
	rotatePlus?: boolean
}

export function Header(props: HeaderProps) {
	const rotateAnim = React.useRef(new Animated.Value(0)).current

	const rotate = rotateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '45deg']
	})

	React.useEffect(() => {
		Animated.timing(rotateAnim, {
			toValue: props.rotatePlus ? 1 : 0,
			duration: 100,
			useNativeDriver: true
		}).start()
	}, [props.rotatePlus])

	return (
		<View style={[styles.header, gloablStyles.shadow]}>
			<Text style={styles.title}>Tasks</Text>
			<Animated.View style={[gloablStyles.iconWrapper, { transform: [{ rotate }] }]}>
				<Pressable
					android_ripple={ripple}
					style={gloablStyles.iconPressable}
					onPress={props.onIconPress}>
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
		height: sizes.headerHeight,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingLeft: 20,
		paddingRight: 10
	},
	title: typography.lg
})
