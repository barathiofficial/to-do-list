import { colors } from '@constants'
import { gloablStyles, sizes, typography } from '@themes'
import React from 'react'
import type {
	NativeSyntheticEvent,
	TextInputFocusEventData,
	TextInputProps,
	TextProps,
	ViewProps
} from 'react-native'
import { StyleSheet, Text, TextInput, View } from 'react-native'

type InputProps = {
	label?: string
	error?: string
	styles?: {
		container?: ViewProps['style']
		input?: TextInputProps['style']
		label?: TextProps['style']
	}
} & TextInputProps

export function Input({ style, label, styles: $styles, error, ...props }: InputProps) {
	const [focused, setFocused] = React.useState(false)

	const hasError = !!error?.trim()

	function onFocus(e: NativeSyntheticEvent<TextInputFocusEventData>) {
		setFocused(true)
		props.onFocus?.(e)
	}

	function onBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
		setFocused(false)
		props.onBlur?.(e)
	}

	return (
		<View style={[styles.container, $styles?.container]}>
			{label && <Text style={[styles.label, typography.md, $styles?.label]}>{label}</Text>}
			<TextInput
				{...props}
				cursorColor={colors.dark}
				placeholderTextColor={colors.medium}
				selectionColor={colors.light}
				style={[
					styles.input,
					focused && styles.focused,
					hasError && styles.hasError,
					props.multiline && styles.multiline,
					typography.md,
					$styles?.input,
					style
				]}
				onBlur={onBlur}
				onFocus={onFocus}
			/>
			{error?.trim() && <Text style={styles.error}>{error}</Text>}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10
	},
	label: {
		marginBottom: 2
	},
	input: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
		color: colors.dark,
		borderWidth: sizes.borderWidth,
		borderColor: colors.medium,
		backgroundColor: colors.white
	},
	focused: {
		borderColor: colors.dark,
		...gloablStyles.shadow
	},
	hasError: {
		borderColor: colors.danger,
		borderWidth: sizes.borderWidth + 1
	},
	multiline: {
		height: 100,
		textAlignVertical: 'top',
		paddingVertical: 10
	},
	error: {
		color: colors.danger,
		fontSize: 12
	}
})
