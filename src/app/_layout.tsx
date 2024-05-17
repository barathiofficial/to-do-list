import initDB from '@db'
import migrations from '@db/drizzle/migrations'
import { categories, priorities, statuses } from '@db/schema'
import StoreProvider from '@redux/context/StoreProvider'
import { gloablStyles } from '@themes'
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator'
import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const db = initDB()

export default function AppLayout() {
	const { success, error } = useMigrations(db, migrations)

	if (error) {
		return (
			<View>
				<Text>Migration error: {error.message}</Text>
			</View>
		)
	}

	if (!success) {
		return (
			<View>
				<Text>Migration is in progress...</Text>
			</View>
		)
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
		<SafeAreaView style={gloablStyles.container}>
			<StoreProvider>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name='(tabs)' />
				</Stack>
			</StoreProvider>
		</SafeAreaView>
	)
}
