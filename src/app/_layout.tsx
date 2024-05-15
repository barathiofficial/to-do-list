import StoreProvider from '@redux/context/StoreProvider'
import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AppLayout() {
	return (
		<SafeAreaView style={styles.container}>
			<StoreProvider>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name='(tabs)' />
				</Stack>
			</StoreProvider>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
