import Feather from '@expo/vector-icons/Feather'
import colors from '@lib/colors'
import { ripple } from '@lib/themes'
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
		<Pressable
			android_ripple={ripple}
			style={styles.task}>
			<View style={styles.iconWrapper}>
				<Pressable
					android_ripple={ripple}
					style={styles.iconWrapper}
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
			<View style={styles.iconWrapper}>
				<Pressable
					android_ripple={ripple}
					style={styles.iconPressable}
					onPress={props.onDelete}>
					<Feather
						color={colors.dark}
						name='trash'
						size={16}
					/>
				</Pressable>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	task: {
		borderBottomWidth: 1 / 2,
		borderBottomColor: colors.border,
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		minHeight: 30,
		paddingHorizontal: 10
	},
	checkbox: {
		width: 14,
		height: 14,
		pointerEvents: 'none'
	},
	textWrapper: {
		flexGrow: 1,
		height: '100%',
		justifyContent: 'center'
	},
	text: {
		fontSize: 14,
		color: colors.dark
	},
	completed: {
		textDecorationLine: 'line-through',
		color: colors.dark
	},
	iconWrapper: {
		width: 30,
		height: 30,
		overflow: 'hidden',
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconPressable: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
})
