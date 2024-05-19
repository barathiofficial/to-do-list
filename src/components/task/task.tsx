import { gloablStyles, ripple, sizes, typography } from '@/themes'
import Feather from '@expo/vector-icons/Feather'
import Checkbox from 'expo-checkbox'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type TaskProps = {
	onPress?: () => void
	text?: string
	onCheck?: () => void
	onDelete?: () => void
}

export function Task(props: TaskProps) {
	return (
		<View style={styles.task}>
			<View style={gloablStyles.iconWrapper}>
				<Pressable
					android_ripple={ripple.light}
					style={gloablStyles.iconPressable}
					onPress={props.onCheck}>
					<Checkbox style={styles.checkbox} />
				</Pressable>
			</View>
			<View style={styles.textWrapper}>
				<Text
					numberOfLines={2}
					style={typography.md}>
					{props.text}
				</Text>
			</View>
			<View style={gloablStyles.iconWrapper}>
				<Pressable
					android_ripple={ripple.light}
					style={gloablStyles.iconPressable}
					onPress={props.onDelete}>
					<Feather
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
		borderBottomWidth: sizes.border.width,
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: 50,
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
	completed: {
		textDecorationLine: 'line-through'
	}
})
