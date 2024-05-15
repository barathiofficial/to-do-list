import StoreProvider from '@redux/context/StoreProvider'
import { gloablStyles } from '@themes'
import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AppLayout() {
	return (
		<SafeAreaView style={gloablStyles.container}>
			<StoreProvider>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name='(tabs)' />
				</Stack>
			</StoreProvider>
		</SafeAreaView>
	)
}
