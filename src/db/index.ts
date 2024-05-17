import { drizzle } from 'drizzle-orm/expo-sqlite'
import { openDatabaseSync } from 'expo-sqlite/next'
import * as schema from './schema'

let db: ReturnType<typeof drizzle> | null = null

export default function initDB() {
	if (!db) {
		const expo = openDatabaseSync('todo.db')
		db = drizzle(expo, {
			logger: true,
			schema
		})
	}

	return db
}
