import store from '@redux/store'
import { Slot } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

export default function Layout() {
	return (
		<Provider store={store}>
			<SafeAreaView>
				<Slot />
			</SafeAreaView>
		</Provider>
	)
}
