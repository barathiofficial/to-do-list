import { Container, Input } from '@/components/ui'
import { sizes } from '@/themes'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

export default function NewTask() {
	const [task, setTask] = useState('')

	return (
		<Container style={styles.container}>
			<Input
				autoFocus
				label='Enter Task'
				value={task}
				onChangeText={setTask}
			/>
		</Container>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: sizes.padding.container,
		paddingVertical: sizes.padding.container / 1.5
	}
})
