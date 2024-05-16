import { drizzle } from 'drizzle-orm/expo-sqlite'
import { openDatabaseSync } from 'expo-sqlite/next'
import { categories, priorities, statuses } from './schema'

let db: ReturnType<typeof drizzle> | null = null

export default async function initDB() {
	if (!db) {
		const expo = openDatabaseSync('todo.db')
		db = drizzle(expo)

		const defaultCategories = ['Work', 'Personal', 'Shopping', 'Others']
		const defaultStatuses = ['Pending', 'In Progress', 'Completed']
		const defaultPriorities = ['Low', 'Medium', 'High']

		await db.insert(categories).values(defaultCategories.map((name) => ({ name })))
		await db.insert(statuses).values(defaultStatuses.map((name) => ({ name })))
		await db.insert(priorities).values(defaultPriorities.map((name) => ({ name })))
	}

	return db
}
