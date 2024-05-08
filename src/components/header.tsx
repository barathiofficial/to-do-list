import Feather from '@expo/vector-icons/Feather'
import colors from '@lib/colors'
import { ripple } from '@lib/themes'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type HeaderProps = {
	onIconPress?: () => void
	inputVisible?: boolean
}

export function Header(props: HeaderProps) {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Tasks</Text>
			<View style={styles.iconWrapper}>
				<Pressable
					android_ripple={ripple}
					style={[styles.icon, props.inputVisible && styles.iconRotate]}
					onPress={props.onIconPress}>
					<Feather
						color={colors.dark}
						name='plus'
						size={24}
					/>
				</Pressable>
			</View>
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
	},
	iconRotate: {
		transform: [{ rotate: '45deg' }]
	}
})
