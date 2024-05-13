import { colors } from '@constants'
import store from '@redux/store'
import { Slot } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

export default function Layout() {
	return (
		<Provider store={store}>
			<SafeAreaView style={styles.container}>
				<Slot />
			</SafeAreaView>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white
	}
})
