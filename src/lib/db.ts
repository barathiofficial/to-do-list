import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('todo.db')

function initDB() {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS `tasks` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `text` TEXT NOT NULL, `completed` INTEGER NOT NULL DEFAULT 0)',
				[],
				() => resolve(true),
				(_, error) => {
					reject(error)
					return true
				}
			)
		})
	})
}

export async function execute(query: string, args: SQLite.SQLStatementArg[] = []) {
	await initDB()
	return new Promise<SQLite.SQLResultSet>((resolve, reject) => {
		db.transaction(
			(tx) => {
				tx.executeSql(
					query,
					args,
					(_, result) => resolve(result),
					(_, error) => {
						reject(error)
						return true
					}
				)
			},
			(error) => {
				reject(error)
			}
		)
	})
}
