import initDB from '@db'
import { categories } from '@db/schema'
import { eq } from 'drizzle-orm'

export type Category = typeof categories.$inferSelect

export async function $addCategory(name: string): Promise<Category> {
	const db = initDB()
	const { lastInsertRowId: id } = await db.insert(categories).values({ name })
	return { id, name }
}

export async function $fetchCategories(): Promise<Category[]> {
	const db = initDB()
	const res = await db.select().from(categories)
	return res
}

export async function $deleteCategory(id: number) {
	const db = initDB()
	await db.delete(categories).where(eq(categories.id, id))
	return id
}

export async function $updateCategory(category: Category): Promise<Category> {
	const db = initDB()
	const { id, name } = category
	await db.update(categories).set({ name }).where(eq(categories.id, id))
	return $fetchCategory(id)
}

export async function $fetchCategory(id: number): Promise<Category> {
	const db = initDB()
	const $categories = await db.select().from(categories).where(eq(categories.id, id))
	return $categories[0]
}
