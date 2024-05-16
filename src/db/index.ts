import { drizzle } from 'drizzle-orm/expo-sqlite'
import { openDatabaseSync } from 'expo-sqlite/next'

let db: ReturnType<typeof drizzle> | null = null

export default function initDB() {
	if (!db) {
		const expo = openDatabaseSync('todo.db')
		db = drizzle(expo)
	}

	return db
}
