import Feather from '@expo/vector-icons/Feather'
import colors from '@lib/colors'
import { gloablStyles, ripple, sizes, typography } from '@lib/themes'
import Checkbox from 'expo-checkbox'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type TaskProps = {
	onPress?: () => void
	text?: string
	completed?: boolean
	onCheck?: () => void
	onDelete?: () => void
}

export function Task(props: TaskProps) {
	return (
		<View style={styles.task}>
			<View style={gloablStyles.iconWrapper}>
				<Pressable
					android_ripple={ripple}
					style={gloablStyles.iconPressable}
					onPress={props.onCheck}>
					<Checkbox
						color={colors.dark}
						style={styles.checkbox}
						value={props.completed}
					/>
				</Pressable>
			</View>
			<View style={styles.textWrapper}>
				<Text
					numberOfLines={2}
					style={[styles.text, props.completed && styles.completed]}>
					{props.text}
				</Text>
			</View>
			<View style={gloablStyles.iconWrapper}>
				<Pressable
					android_ripple={ripple}
					style={gloablStyles.iconPressable}
					onPress={props.onDelete}>
					<Feather
						color={colors.dark}
						name='trash'
						size={20}
					/>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	task: {
		flex: 1,
		borderBottomWidth: sizes.borderWidth,
		borderBottomColor: colors.light,
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: sizes.taskItemHeight,
		paddingHorizontal: 10
	},
	checkbox: {
		width: 16,
		height: 16,
		pointerEvents: 'none'
	},
	textWrapper: {
		flexGrow: 1,
		height: '100%',
		justifyContent: 'center'
	},
	text: typography.md,
	completed: {
		textDecorationLine: 'line-through',
		color: colors.dark
	}
})
