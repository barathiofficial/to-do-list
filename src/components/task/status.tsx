import { colors, fontFamily, sizes } from '@/themes'
import * as Icons from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export type StatusProps = {
	status?: 'todo' | 'done' | 'progress'
}

export function Status(props: StatusProps) {
	const color = colors.status[props.status || 'todo'].dark

	return (
		<View style={[styles.container, { backgroundColor: color.background }]}>
			<Text
				numberOfLines={1}
				style={styles.text}>
				{props.status}
			</Text>
			<Icons.Octicons
				color={color.foreground}
				name='dot-fill'
				size={14}
				style={styles.dot}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderRadius: sizes.padding.tasK,
		paddingHorizontal: 10,
		paddingVertical: 2,
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		textTransform: 'uppercase',
		fontSize: sizes.fontSize.xxs,
		fontFamily: fontFamily.Poppins.Medium,
		color: colors.accent.text.primary,
		marginTop: 1.5
	},
	dot: {
		marginLeft: 5
	}
})
