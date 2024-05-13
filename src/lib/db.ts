import * as SQLite from 'expo-sqlite'

let db: SQLite.SQLiteDatabase | null = null

export default async function initDB() {
	if (!db) {
		db = await SQLite.openDatabaseAsync('todo.db')

		db.execAsync(
			'CREATE TABLE IF NOT EXISTS `tasks` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` TEXT NOT NULL, `completed` INTEGER NOT NULL DEFAULT 0)'
		)
	}

	return db
}
