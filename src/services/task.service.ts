import initDB from '@db'

export type Task = {
	id: number
	text: string
	completed: boolean
}

type RawTask = {
	id: number
	text: string
	completed: number
}

export async function $addTask(text: string) {
	const db = await initDB()
	const query = 'INSERT INTO `tasks` (`text`, `completed`) VALUES ($text, $completed)'
	const stmt = await db.prepareAsync(query)

	try {
		const result = await stmt.executeAsync({ $text: text, $completed: 0 })

		return {
			id: result.lastInsertRowId,
			text,
			completed: false
		}
	} finally {
		await stmt.finalizeAsync()
	}
}

export async function $fetchTasks() {
	const db = await initDB()
	const query = 'SELECT * FROM `tasks` ORDER BY `completed` ASC, `id` DESC'
	const stmt = await db.prepareAsync(query)

	try {
		const result = await stmt.executeAsync<RawTask>()
		const tasks = await result.getAllAsync()

		return tasks.map<Task>((task) => ({
			id: task.id,
			text: task.text,
			completed: task.completed === 1
		}))
	} finally {
		await stmt.finalizeAsync()
	}
}

export async function $deleteTask(id: number) {
	const db = await initDB()
	const query = 'DELETE FROM `tasks` WHERE `id` = $id'
	const stmt = await db.prepareAsync(query)

	try {
		await stmt.executeAsync({ $id: id })
		return id
	} finally {
		await stmt.finalizeAsync()
	}
}

export async function $updateTask(task: Task) {
	const db = await initDB()
	const query = 'UPDATE `tasks` SET `text` = $text, `completed` = $completed WHERE `id` = $id'
	const stmt = await db.prepareAsync(query)

	try {
		await stmt.executeAsync({
			$id: task.id,
			$text: task.text,
			$completed: task.completed ? 1 : 0
		})

		return $fetchTask(task.id)
	} finally {
		await stmt.finalizeAsync()
	}
}

export async function $fetchTask(id: number) {
	const db = await initDB()
	const query = 'SELECT * FROM `tasks` WHERE `id` = $id'
	const stmt = await db.prepareAsync(query)

	try {
		const result = await stmt.executeAsync<RawTask>({ $id: id })
		const task = await result.getFirstAsync()
		return {
			id: task?.id || 0,
			text: task?.text || '',
			completed: task?.completed === 1
		} as Task
	} finally {
		await stmt.finalizeAsync()
	}
}

export async function $toggleTask(id: number) {
	const db = await initDB()
	const query = 'UPDATE `tasks` SET `completed` = NOT `completed` WHERE `id` = $id'
	const stmt = await db.prepareAsync(query)

	try {
		await stmt.executeAsync({ $id: id })
		return $fetchTask(id)
	} finally {
		await stmt.finalizeAsync()
	}
}
