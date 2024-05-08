import { execute } from '@lib/db'

export type Task = {
	id?: number
	text?: string
	completed?: boolean
}

export async function fetchTasks() {
	const query = 'SELECT * FROM `tasks` ORDER BY `id` DESC'
	const result = await execute(query)
	const tasks: Task[] = []

	for (let i = 0; i < result.rows.length; i++) {
		const row = result.rows.item(i)
		tasks.push({
			id: row.id,
			text: row.text,
			completed: row.completed === 1
		})
	}

	return tasks
}

export async function addTask(text: string) {
	if (!text.trim()) {
		throw new Error('Task text is required')
	}

	const query = 'INSERT INTO `tasks` (`text`, `completed`) VALUES (?, 0)'
	const result = await execute(query, [text])
	return {
		id: result.insertId,
		text,
		completed: false
	}
}

export async function toggleTask(id: number) {
	if (!id) {
		throw new Error('Task ID is required')
	}

	const query = 'UPDATE `tasks` SET completed = NOT `completed` WHERE `id` = ?'
	await execute(query, [id])
	return id
}

export async function updateTask(data: Task) {
	if (!data.id) {
		throw new Error('Task ID is required')
	}

	if (!data.text && !data.completed) {
		throw new Error('Task text or completion status is required')
	}

	const query = 'UPDATE `tasks` SET `text` = ?, `completed` = ? WHERE `id` = ?'
	await execute(query, [data.text || '', data.completed ? 1 : 0, data.id])
	return data
}

export async function deleteTask(id: number) {
	if (!id) {
		throw new Error('Task ID is required')
	}

	const query = 'DELETE FROM `tasks` WHERE `id` = ?'
	await execute(query, [id])
	return id
}
