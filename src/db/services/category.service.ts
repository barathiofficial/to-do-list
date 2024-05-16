import initDB from '@db'
import { categories } from '@db/schema'
import { eq } from 'drizzle-orm'

export type Category = typeof categories.$inferSelect

export async function $addCategory(name: string): Promise<Category> {
	const db = await initDB()
	const { lastInsertRowId: id } = await db.insert(categories).values({ name })
	return { id, name }
}

export async function $fetchCategories(): Promise<Category[]> {
	const db = await initDB()
	return db.select().from(categories)
}

export async function $deleteCategory(id: number) {
	const db = await initDB()
	db.delete(categories).where(eq(categories.id, id))
	return id
}

export async function $updateCategory(
	category: Partial<Omit<Category, 'id' | 'createdAt'>> & Pick<Category, 'id'>
): Promise<Category> {
	const db = await initDB()
	const { id, ...data } = category
	db.update(categories).set(data).where(eq(categories.id, id))
	return $fetchCategory(id)
}

export async function $fetchCategory(id: number): Promise<Category> {
	const db = await initDB()
	const $categories = await db.select().from(categories).where(eq(categories.id, id))
	return $categories[0]
}
