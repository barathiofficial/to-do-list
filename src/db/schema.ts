import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const categories = sqliteTable('categories', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name', { length: 255 }).notNull()
})

export const statuses = sqliteTable('statuses', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name', { length: 255 }).notNull()
})

export const priorities = sqliteTable('priorities', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name', { length: 255 }).notNull()
})

export const tasks = sqliteTable('tasks', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	task: text('task', { length: 255 }).notNull(),
	description: text('description', { length: 255 }),
	category_id: integer('category_id')
		.references(() => categories.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade'
		})
		.notNull(),
	status_id: integer('status_id')
		.references(() => statuses.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade'
		})
		.notNull(),
	priority_id: integer('priority_id')
		.references(() => priorities.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade'
		})
		.notNull(),
	due_date: text('due_date', { length: 255 }),
	created_at: text('created_at', { length: 255 }).notNull()
})

export const subTasks = sqliteTable('sub_tasks', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	task: text('task', { length: 255 }).notNull(),
	task_id: integer('task_id')
		.references(() => tasks.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade'
		})
		.notNull(),
	status_id: integer('status_id')
		.references(() => statuses.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade'
		})
		.notNull(),
	created_at: text('created_at', { length: 255 }).notNull()
})
