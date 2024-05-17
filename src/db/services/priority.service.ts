import initDB from '@db'
import { priorities } from '@db/schema'
import { eq } from 'drizzle-orm'

export type Priority = typeof priorities.$inferSelect

export async function $addPriority(name: string): Promise<Priority> {
	const db = initDB()
	const { lastInsertRowId: id } = await db.insert(priorities).values({ name })
	return { id, name }
}

export async function $fetchPriorities(): Promise<Priority[]> {
	const db = initDB()
	const res = await db.select().from(priorities)
	return res
}

export async function $deletePriority(id: number) {
	const db = initDB()
	await db.delete(priorities).where(eq(priorities.id, id))
	return id
}

export async function $updatePriority(priority: Priority): Promise<Priority> {
	const db = initDB()
	const { id, name } = priority
	await db.update(priorities).set({ name }).where(eq(priorities.id, id))
	return $fetchPriority(id)
}

export async function $fetchPriority(id: number): Promise<Priority> {
	const db = initDB()
	const $priorities = await db.select().from(priorities).where(eq(priorities.id, id))
	return $priorities[0]
}
