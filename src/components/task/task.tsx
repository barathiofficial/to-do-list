import { colors, fontFamily, ripple, sizes } from '@/themes'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import type { PriorityProps } from './priority'
import { Priority } from './priority'
import type { StatusProps } from './status'
import { Status } from './status'

type TaskProps = {
	task?: string
	notes?: string
} & StatusProps &
	PriorityProps

export function Task(props: TaskProps) {
	return (
		<Pressable
			android_ripple={ripple.light}
			style={styles.container}>
			<View style={styles.left}>
				<Text
					numberOfLines={1}
					style={styles.task}>
					{props.task}
				</Text>
				<Text
					numberOfLines={1}
					style={styles.notes}>
					{props.notes}
				</Text>
			</View>
			<View style={styles.right}>
				<Priority priority={props.priority} />
				<Status status={props.status} />
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: sizes.border.width,
		borderBottomColor: colors.border.lightGray,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: sizes.padding.tasK,
		paddingVertical: sizes.padding.tasK / 2,
		backgroundColor: colors.white
	},
	left: {
		flex: 1
	},
	task: {
		fontSize: sizes.fontSize.md,
		fontFamily: fontFamily.Poppins.Medium,
		color: colors.accent.text.primary
	},
	notes: {
		fontSize: sizes.fontSize.xs,
		fontFamily: fontFamily.Poppins.Regular,
		color: colors.accent.text.secondary
	},
	right: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5
	}
})
