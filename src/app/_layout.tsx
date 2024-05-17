import initDB from '@db'
import migrations from '@db/drizzle/migrations'
import { categories, priorities, statuses } from '@db/schema'
import StoreProvider from '@redux/context/StoreProvider'
import { gloablStyles } from '@themes'
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const db = initDB()
SplashScreen.preventAutoHideAsync()

export default function AppLayout() {
	const { success, error } = useMigrations(db, migrations)
	const [fontsLoaded, fontError] = useFonts({
		'inter-regular': require('@/assets/fonts/Inter-Regular.ttf'),
		'inter-medium': require('@/assets/fonts/Inter-Medium.ttf'),
		'inter-semibold': require('@/assets/fonts/Inter-SemiBold.ttf'),
		'inter-bold': require('@/assets/fonts/Inter-Bold.ttf')
	})

	const onLayoutRootView = React.useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded, fontError])

	if (!fontsLoaded && !fontError) {
		return <Text>Loading fonts...</Text>
	}

	if (error) {
		return <Text>Migration error: {error.message}</Text>
	}

	if (!success) {
		return <Text>Migration is in progress...</Text>
	}

	if (success) {
		db.transaction((tx) => {
			tx.select()
				.from(categories)
				.then((res) => {
					if (res.length === 0) {
						tx.insert(categories).values([
							{ name: 'Personal' },
							{ name: 'Work' },
							{ name: 'Shopping' },
							{ name: 'Others' }
						])
					}
				})

			tx.select()
				.from(statuses)
				.then((res) => {
					if (res.length === 0) {
						tx.insert(statuses).values([
							{ name: 'Todo' },
							{ name: 'In Progress' },
							{ name: 'Done' }
						])
					}
				})

			tx.select()
				.from(priorities)
				.then((res) => {
					if (res.length === 0) {
						tx.insert(priorities).values([
							{ name: 'Low' },
							{ name: 'Medium' },
							{ name: 'High' }
						])
					}
				})
		})
	}

	return (
		<SafeAreaView
			style={gloablStyles.container}
			onLayout={onLayoutRootView}>
			<StoreProvider>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name='(tabs)' />
				</Stack>
			</StoreProvider>
		</SafeAreaView>
	)
}
