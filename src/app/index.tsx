import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
	const [focused, setFocused] = React.useState(false)

	const inputStyle = StyleSheet.flatten([styles.input, focused && styles.inputFocused])

	function onFocus() {
		setFocused(true)
	}

	function onBlur() {
		setFocused(false)
	}

	return (
		<View style={styles.container}>
			<TextInput
				placeholder='Type here...'
				style={inputStyle}
				onBlur={onBlur}
				onFocus={onFocus}
			/>
			<Pressable
				style={styles.button}
				android_ripple={{
					color: '#00000090',
					borderless: false
				}}>
				<Text style={styles.buttonText}>Press me</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#f9f9f9'
	},
	input: {
		height: 40,
		borderColor: '#bbb',
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		backgroundColor: '#fff',
		elevation: 1,
		shadowColor: '#000'
	},
	inputFocused: {
		borderColor: '#0077cc',
		shadowColor: '#0077cc'
	},
	button: {
		marginTop: 20,
		padding: 10,
		backgroundColor: '#0077cc',
		borderRadius: 5
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center'
	}
})
