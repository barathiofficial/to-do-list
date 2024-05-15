import { Input } from '@components'
import { gloablStyles, sizes } from '@themes'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

export default function NewTask() {
	return (
		<ScrollView style={[gloablStyles.container, styles.container]}>
			<Input
				autoFocus
				label='Task'
				placeholder='Enter task'
			/>
			<Input
				multiline
				label='Description'
				placeholder='Enter description'
			/>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: sizes.containerPadding
	}
})
