import { colors } from '@constants'
import { ripple, sizes, typography } from '@themes'
import React from 'react'
import type { PressableProps, TextInputProps, TextProps, ViewProps } from 'react-native'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type InputProps = {
	label?: string
	styles?: {
		container?: ViewProps['style']
		select?: TextInputProps['style']
		label?: TextProps['style']
	}
	value?: string
	placeholder?: string
	style?: ViewProps['style']
	onPress?: PressableProps['onPress']
	error?: string
}

export function Select(props: InputProps) {
	const hasError = !!props.error?.trim()

	return (
		<View style={[styles.container, props.styles?.container]}>
			{props.label && (
				<Text style={[styles.label, typography.sm, props.styles?.label]}>
					{props.label}
				</Text>
			)}
			<View
				style={[
					styles.select,
					hasError && styles.hasError,
					props.styles?.select,
					props.style
				]}>
				<Pressable
					android_ripple={ripple.light}
					style={styles.pressable}
					onPress={props.onPress}>
					{props.value ? (
						<Text style={[typography.sm, styles.value]}>{props.value}</Text>
					) : (
						<Text style={[typography.sm, styles.placeholder]}>{props.placeholder}</Text>
					)}
				</Pressable>
			</View>
			{hasError && <Text style={[typography.xs, styles.error]}>{props.error}</Text>}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 12
	},
	label: {
		marginBottom: 2
	},
	select: {
		height: sizes.height.select,
		borderRadius: 5,
		borderWidth: sizes.border.width,
		borderColor: colors.secondary,
		backgroundColor: colors.light,
		overflow: 'hidden'
	},
	pressable: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		paddingHorizontal: 10
	},
	value: {
		color: colors.dark
	},
	placeholder: {
		color: colors.gray
	},
	hasError: {
		borderColor: colors.danger
	},
	error: {
		color: colors.danger,
		position: 'absolute',
		top: '100%',
		left: 0
	}
})
