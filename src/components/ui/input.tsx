import { colors, fontFamily, sizes } from '@/themes'
import { omit } from '@/utils'
import React, { useState } from 'react'
import type { Control, FieldValues, Path, PathValue } from 'react-hook-form'
import { useController } from 'react-hook-form'
import type { TextProps, ViewProps } from 'react-native'
import { StyleSheet, View } from 'react-native'
import type { TextInputProps } from 'react-native-paper'
import { Text, TextInput } from 'react-native-paper'

type InputProps<T extends FieldValues> = {
	containerStyle?: ViewProps['style']
	errorStyle?: TextProps['style']
	errorText?: string
	control?: Control<T>
	name?: Path<T>
} & Omit<TextInputProps, 'multiline'>

export function Input<T extends FieldValues>({
	control,
	name,
	errorText,
	errorStyle,
	containerStyle,
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

	const [localValue, setLocalValue] = useState(props.value || '')

	const regularField = {
		value: localValue,
		onChange: setLocalValue
	}

	const regularFieldState = {
		error: {
			message: errorText
		},
		invalid: !!errorText?.trim()
	}

	const field = controller ? controller.field : regularField
	const fieldState = controller ? controller.fieldState : regularFieldState

	const handleChangeText = (text: string) => {
		field.onChange(text)

		if (!control) {
			setLocalValue(text)
		}

		props.onChangeText?.(text)
	}

	return (
		<View style={[styles.container, containerStyle]}>
			<TextInput
				{...omit<TextInputProps, 'multiline'>(props, 'multiline')}
				activeOutlineColor={colors.textInput.border.focused}
				contentStyle={styles.inputText}
				cursorColor={colors.textInput.text.default}
				error={fieldState.invalid}
				mode='outlined'
				outlineColor={colors.textInput.border.default}
				placeholderTextColor={colors.textInput.placeholder}
				selectionColor={colors.textInput.selection}
				style={[styles.input, props.style]}
				textColor={colors.textInput.text.default}
				value={field.value}
				onChangeText={handleChangeText}
			/>
			{fieldState.error && (
				<Text style={[styles.error, errorStyle]}>{fieldState.error.message}</Text>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 12
	},
	input: {
		height: sizes.height.input
	},
	inputText: {
		fontSize: sizes.fontSize.sm,
		fontFamily: fontFamily.Poppins.Medium,
		lineHeight: 20
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
