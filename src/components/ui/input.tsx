import { colors } from '@constants'
import { sizes, typography } from '@themes'
import React from 'react'
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
} & TextInputProps

export function Input<T extends FieldValues>({
	label,
	styles: $styles,
	style,
	control,
	name,
	...props
}: InputProps<T>) {
	const controller = useController({
		control,
		name: name as Path<T>,
		defaultValue: '' as PathValue<T, Path<T>>
	})

	const [focused, setFocused] = React.useState(false)

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
			{label && <Text style={[styles.label, typography.sm, $styles?.label]}>{label}</Text>}
			<TextInput
				{...props}
				cursorColor={colors.dark}
				placeholderTextColor={colors.gray}
				selectionColor={colors.light}
				value={controller.field.value || props.value}
				style={[
					styles.input,
					focused && styles.focused,
					controller.fieldState.invalid && styles.hasError,
					props.multiline && styles.multiline,
					typography.sm,
					$styles?.input,
					style
				]}
				onBlur={onBlur}
				onChangeText={controller.field.onChange || props.onChangeText}
				onFocus={onFocus}
			/>
			{controller.fieldState.error && (
				<Text style={[typography.xs, styles.error]}>
					{controller.fieldState.error.message}
				</Text>
			)}
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
	input: {
		height: sizes.height.input,
		paddingHorizontal: 10,
		borderRadius: 5,
		color: colors.dark,
		borderWidth: sizes.border.width,
		borderColor: colors.secondary,
		backgroundColor: colors.light
	},
	focused: {
		borderColor: colors.gray
	},
	hasError: {
		borderColor: colors.danger
	},
	multiline: {
		height: 100,
		textAlignVertical: 'top',
		paddingVertical: 10
	},
	error: {
		color: colors.danger,
		position: 'absolute',
		top: '100%',
		left: 0
	}
})
