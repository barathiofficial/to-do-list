import initDB from '@db'
import { tasks } from '@db/schema'
import { eq } from 'drizzle-orm'

export type Task = typeof tasks.$inferSelect

export async function $addTask(task: Omit<Task, 'id' | 'createdAt'>): Promise<Task> {
	const db = initDB()
	const createdAt = new Date().toISOString()
	const { lastInsertRowId: id } = await db.insert(tasks).values({ ...task, createdAt })
	return {
		...task,
		id,
		createdAt
	}
}

export function $fetchTasks(): Promise<Task[]> {
	const db = initDB()
	return db.select().from(tasks)
}

export async function $deleteTask(id: number) {
	const db = initDB()
	await db.delete(tasks).where(eq(tasks.id, id))
	return id
}

export async function $updateTask(
	task: Partial<Omit<Task, 'id' | 'createdAt'>> & Pick<Task, 'id'>
): Promise<Task> {
	const db = initDB()
	const { id, ...data } = task
	await db.update(tasks).set(data).where(eq(tasks.id, id))
	return $fetchTask(id)
}

export async function $fetchTask(id: number): Promise<Task> {
	const db = initDB()
	const $tasks = await db.select().from(tasks).where(eq(tasks.id, id))
	return $tasks[0]
}
