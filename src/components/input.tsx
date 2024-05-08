import Feather from '@expo/vector-icons/Feather'
import colors from '@lib/colors'
import { ripple } from '@lib/themes'
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
				style={[styles.input, style]}
			/>
			<View style={styles.iconWrapper}>
				<Pressable
					android_ripple={ripple}
					style={styles.iconPressable}
					onPress={onCancel}>
					<Feather
						color={colors.dark}
						name='x'
						size={16}
					/>
				</Pressable>
			</View>
			<View style={styles.iconWrapper}>
				<Pressable
					android_ripple={ripple}
					style={styles.iconPressable}
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
		height: 30,
		borderColor: colors.border,
		borderWidth: 1 / 2
	},
	input: {
		width: Dimensions.get('window').width - 80,
		height: '100%',
		paddingHorizontal: 10,
		color: colors.dark,
		fontSize: 14
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
