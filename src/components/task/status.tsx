import { colors, fontFamily, sizes } from '@/themes'
import * as Icons from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
				size={20}
				style={styles.dot}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderRadius: sizes.padding.tasK,
		paddingHorizontal: 13,
		paddingVertical: 3,
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		textTransform: 'uppercase',
		fontSize: sizes.fontSize.xs,
		fontFamily: fontFamily.Poppins.Medium,
		color: colors.accent.text.primary,
		marginTop: 1.5
	},
	dot: {
		marginLeft: 5
	}
})
