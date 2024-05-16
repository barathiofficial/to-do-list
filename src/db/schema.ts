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
	categoryId: integer('categoryId')
		.references(() => categories.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade'
		})
		.notNull(),
	statusId: integer('statusId')
		.references(() => statuses.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade'
		})
		.notNull(),
	priorityId: integer('priorityId')
		.references(() => priorities.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade'
		})
		.notNull(),
	dueDate: text('dueDate', { length: 255 }),
	createdAt: text('createdAt', { length: 255 }).notNull()
})

export const subTasks = sqliteTable('subTasks', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	task: text('task', { length: 255 }).notNull(),
	taskId: integer('taskId')
		.references(() => tasks.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade'
		})
		.notNull(),
	statusId: integer('statusId')
		.references(() => statuses.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade'
		})
		.notNull(),
	createdAt: text('createdAt', { length: 255 }).notNull()
})
