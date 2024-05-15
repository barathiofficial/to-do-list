import { colors } from '@constants'
import Feather from '@expo/vector-icons/Feather'
import { gloablStyles, ripple, sizes, typography } from '@themes'
import React from 'react'
import type { TextInputProps } from 'react-native'
import { ActivityIndicator, Dimensions, Pressable, StyleSheet, TextInput, View } from 'react-native'

type InputProps = {
	onCancel?: () => void
	onConfirm?: () => void
	loading?: boolean
} & TextInputProps

export function Input({ style, onCancel, onConfirm, loading, ...props }: InputProps) {
	return (
		<View style={styles.container}>
			<TextInput
				{...props}
				style={[styles.input, typography.md, style]}
			/>
			<View style={gloablStyles.iconWrapperSmall}>
				<Pressable
					android_ripple={ripple}
					style={gloablStyles.iconPressable}
					onPress={onCancel}>
					<Feather
						color={colors.dark}
						name='x'
						size={16}
					/>
				</Pressable>
			</View>
			<View style={gloablStyles.iconWrapperSmall}>
				<Pressable
					android_ripple={ripple}
					style={gloablStyles.iconPressable}
					onPress={onConfirm}>
					{loading ? (
						<ActivityIndicator
							color={colors.dark}
							size={16}
						/>
					) : (
						<Feather
							color={colors.dark}
							name='check'
							size={16}
						/>
					)}
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		height: sizes.taskItemHeight
	},
	input: {
		width: Dimensions.get('window').width - 80,
		height: '100%',
		paddingHorizontal: 10
	}
})
