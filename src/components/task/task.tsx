import { colors, fontFamily, ripple, sizes } from '@/themes'
import * as Icons from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import type { PriorityProps } from './priority'
import { Priority } from './priority'
import type { StatusProps } from './status'
import { Status } from './status'

type TaskProps = {
	task?: string
	notes?: string
	category?: keyof typeof colors.categories
} & StatusProps &
	PriorityProps

export function Task(props: TaskProps) {
	const categoryColor = colors.categories[props.category || 'shopping']
	return (
		<Pressable
			android_ripple={ripple.light}
			style={styles.container}>
			<View style={[styles.category, { backgroundColor: categoryColor.background }]}>
				<Icons.Feather
					color={categoryColor.foreground}
					name='shopping-bag'
					size={16}
				/>
			</View>
			<View style={styles.mid}>
				<Text
					numberOfLines={1}
					style={styles.task}
					variant='bodyMedium'>
					{props.task}
				</Text>
				{props.notes && (
					<Text
						numberOfLines={1}
						style={styles.notes}
						variant='bodySmall'>
						{props.notes}
					</Text>
				)}
			</View>
			<View style={styles.right}>
				<Status status={props.status} />
				<Priority priority={props.priority} />
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
	category: {
		marginRight: 5,
		width: 30,
		height: 30,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	mid: {
		flex: 1
	},
	task: {
		fontFamily: fontFamily.Poppins.Medium,
		color: colors.accent.text.primary
	},
	notes: {
		fontFamily: fontFamily.Poppins.Regular,
		color: colors.accent.text.secondary,
		marginBottom: 2
	},
	right: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5
	}
})
