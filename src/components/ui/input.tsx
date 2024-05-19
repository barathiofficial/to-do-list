import { sizes } from '@/themes'
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
			{label && <Text style={[styles.label, $styles?.label]}>{label}</Text>}
			<TextInput
				{...props}
				value={controller.field.value || props.value}
				style={[
					styles.input,
					focused && styles.focused,
					controller.fieldState.invalid && styles.hasError,
					props.multiline && styles.multiline,
					$styles?.input,
					style
				]}
				onBlur={onBlur}
				onChangeText={controller.field.onChange || props.onChangeText}
				onFocus={onFocus}
			/>
			{controller.fieldState.error && (
				<Text style={[styles.error]}>{controller.fieldState.error.message}</Text>
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
		borderWidth: sizes.border.width
	},
	focused: {},
	hasError: {},
	multiline: {
		height: 100,
		textAlignVertical: 'top',
		paddingVertical: 10
	},
	error: {
		position: 'absolute',
		top: '100%',
		left: 0
	}
})
