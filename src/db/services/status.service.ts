import initDB from '@db'
import { statuses } from '@db/schema'
import { eq } from 'drizzle-orm'

export type Status = typeof statuses.$inferSelect

export async function $addStatus(name: string): Promise<Status> {
	const db = initDB()
	const { lastInsertRowId: id } = await db.insert(statuses).values({ name })
	return { id, name }
}

export async function $fetchstatuses(): Promise<Status[]> {
	const db = initDB()
	const res = await db.select().from(statuses)
	return res
}

export async function $deleteStatus(id: number) {
	const db = initDB()
	await db.delete(statuses).where(eq(statuses.id, id))
	return id
}

export async function $updateStatus(status: Status): Promise<Status> {
	const db = initDB()
	const { id, name } = status
	await db.update(statuses).set({ name }).where(eq(statuses.id, id))
	return $fetchStatus(id)
}

export async function $fetchStatus(id: number): Promise<Status> {
	const db = initDB()
	const $statuses = await db.select().from(statuses).where(eq(statuses.id, id))
	return $statuses[0]
}
