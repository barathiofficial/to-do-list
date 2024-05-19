import { sizes } from '@/themes'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export function Task() {
	return <View style={styles.task}></View>
}

const styles = StyleSheet.create({
	task: {
		flex: 1,
		borderBottomWidth: sizes.border.width,
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: 50,
		paddingHorizontal: 10
	}
})
