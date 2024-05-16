import initDB from '@db'
import { tasks } from '@db/schema'
import { eq } from 'drizzle-orm'

export type Task = typeof tasks.$inferSelect

export async function $addTask(task: Omit<Task, 'id' | 'createdAt'>): Promise<Task> {
	const db = await initDB()
	const createdAt = new Date().toISOString()
	const { lastInsertRowId: id } = await db.insert(tasks).values({ ...task, createdAt })

	return {
		...task,
		id,
		createdAt
	}
}

export async function $fetchTasks(): Promise<Task[]> {
	const db = await initDB()
	return db.select().from(tasks)
}

export async function $deleteTask(id: number) {
	const db = await initDB()
	db.delete(tasks).where(eq(tasks.id, id))
	return id
}

export async function $updateTask(
	task: Partial<Omit<Task, 'id' | 'createdAt'>> & Pick<Task, 'id'>
): Promise<Task> {
	const db = await initDB()
	const { id, ...data } = task
	db.update(tasks).set(data).where(eq(tasks.id, id))
	return $fetchTask(id)
}

export async function $fetchTask(id: number): Promise<Task> {
	const db = await initDB()
	const $tasks = await db.select().from(tasks).where(eq(tasks.id, id))
	return $tasks[0]
}
