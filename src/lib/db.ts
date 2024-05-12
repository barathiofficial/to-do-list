import * as SQLite from 'expo-sqlite'

export default async function initDB() {
	const db = await SQLite.openDatabaseAsync('todo.db')

	db.execAsync(
		'CREATE TABLE IF NOT EXISTS `tasks` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` TEXT NOT NULL, `completed` INTEGER NOT NULL DEFAULT 0)'
	)

	return db
}
