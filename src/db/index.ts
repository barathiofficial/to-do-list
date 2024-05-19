import type { SQLiteDatabase } from 'expo-sqlite'
import { openDatabaseSync } from 'expo-sqlite'

let db: SQLiteDatabase | null = null

export default function initDB() {
	if (!db) {
		db = openDatabaseSync('todo.db')
		db.execSync(`CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT
        )`)
	}

	return db
}
