import { ripple, sizes, typography } from '@/themes'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type PickItemProps = {
	text?: string
	selected?: boolean
	onSelect?: () => void
	lastItem?: boolean
}

export function PickItem(props: PickItemProps) {
	return (
		<Pressable
			android_ripple={ripple.light}
			style={[styles.container, props.lastItem && styles.lastItem]}
			onPress={props.onSelect}>
			<View style={styles.content}>
				<Text style={typography.md}>{props.text}</Text>
				{props.selected && (
					<Feather
						name='check'
						size={20}
					/>
				)}
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderBottomWidth: sizes.border.width
	},
	lastItem: {
		borderBottomWidth: 0
	},
	content: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})
