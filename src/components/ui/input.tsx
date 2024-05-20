import { colors, fontFamily, sizes } from '@/themes'
import React, { useMemo, useState } from 'react'
import type { Control, FieldValues, Path, PathValue } from 'react-hook-form'
import { useController } from 'react-hook-form'
import type {
	NativeSyntheticEvent,
	TextInputFocusEventData,
	TextInputProps,
	TextProps,
	ViewProps
} from 'react-native'
import { StyleSheet, Text, TextInput, View } from 'react-native'

type InputProps<T extends FieldValues> = {
	label?: string
	styles?: {
		container?: ViewProps['style']
		input?: TextInputProps['style']
		label?: TextProps['style']
	}
	control?: Control<T>
	name?: Path<T>
	error?: string
} & TextInputProps

export function Input<T extends FieldValues>({
	label,
	styles: $styles,
	style,
	control,
	name,
	error,
	...props
}: InputProps<T>) {
	const controller =
		control &&
		name &&
		useController({
			control,
			name,
			defaultValue: '' as PathValue<T, Path<T>>
		})

	const [focused, setFocused] = useState(false)
	const [localValue, setLocalValue] = useState(props.value || '')

	const regularField = {
		value: localValue,
		onChange: setLocalValue
	}

	const regularFieldState = {
		error: {
			message: error
		},
		invalid: !!error?.trim()
	}

	const field = controller ? controller.field : regularField
	const fieldState = controller ? controller.fieldState : regularFieldState

	const inputStyle = useMemo(() => {
		return [
			styles.input,
			focused && styles.focused,
			fieldState.invalid && styles.hasError,
			props.multiline && styles.multiline,
			$styles?.input,
			style
		]
	}, [focused, fieldState.invalid, props.multiline, $styles?.input, style])

	const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
		setFocused(true)
		props.onFocus?.(e)
	}

	const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
		setFocused(false)
		props.onBlur?.(e)
	}

	const handleChangeText = (text: string) => {
		field.onChange(text)

		if (!control) {
			setLocalValue(text)
		}

		props.onChangeText?.(text)
	}

	return (
		<View style={[styles.container, $styles?.container]}>
			{label && <Text style={[styles.label, $styles?.label]}>{label}</Text>}
			<TextInput
				{...props}
				placeholderTextColor={colors.textInput.placeholder}
				style={inputStyle}
				value={field.value}
				onBlur={handleBlur}
				onChangeText={handleChangeText}
				onFocus={handleFocus}
			/>
			{fieldState.error && <Text style={[styles.error]}>{fieldState.error.message}</Text>}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 12
	},
	label: {
		marginBottom: -1,
		color: colors.accent.text.primary,
		fontSize: sizes.fontSize.sm,
		fontFamily: fontFamily.Poppins.Medium
	},
	input: {
		height: sizes.height.input,
		paddingHorizontal: 10,
		borderRadius: 5,
		borderWidth: sizes.border.width,
		borderColor: colors.textInput.border.default,
		backgroundColor: colors.textInput.background.default,
		color: colors.textInput.text.default,
		fontSize: sizes.fontSize.sm,
		fontFamily: fontFamily.Poppins.Regular
	},
	focused: {
		borderColor: colors.textInput.border.focused
	},
	hasError: {
		borderColor: colors.textInput.border.error
	},
	multiline: {
		height: 100,
		textAlignVertical: 'top',
		paddingVertical: 10
	},
	error: {
		position: 'absolute',
		top: '100%',
		left: 0,
		color: colors.textInput.error,
		fontSize: sizes.fontSize.xs,
		fontFamily: fontFamily.Poppins.Medium,
		marginTop: -1
	}
})
