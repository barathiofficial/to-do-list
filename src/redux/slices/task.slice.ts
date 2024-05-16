import type { Task } from '@db/services'
import { addTask, deleteTask, fetchTasks, toggleTask, updateTask } from '@redux/thunks'
import { createSlice } from '@reduxjs/toolkit'

type Status = 'idle' | 'loading' | 'succeeded' | 'failed'

type TaskState = {
	data: Task[]
	status: {
		add: Status
		fetch: Status
		update: Status
		delete: Status
		toggle: Status
	}
	error: string | null | undefined
}

const initialState: TaskState = {
	data: [],
	status: {
		add: 'idle',
		fetch: 'idle',
		update: 'idle',
		delete: 'idle',
		toggle: 'idle'
	},
	error: null
}

const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchTasks.fulfilled, (state, action) => {
			state.data = action.payload || []
			state.status.fetch = 'succeeded'
		})
		builder.addCase(fetchTasks.pending, (state) => {
			state.status.fetch = 'loading'
		})
		builder.addCase(fetchTasks.rejected, (state, action) => {
			state.status.fetch = 'failed'
			state.error = action.error.message
		})
		builder.addCase(addTask.fulfilled, (state, action) => {
			state.status.add = 'succeeded'

			if (action.payload) {
				state.data.unshift(action.payload)
			}
		})
		builder.addCase(addTask.pending, (state) => {
			state.status.add = 'loading'
		})
		builder.addCase(addTask.rejected, (state, action) => {
			state.status.add = 'failed'
			state.error = action.error.message
		})
		builder.addCase(toggleTask.fulfilled, (state, action) => {
			state.status.toggle = 'succeeded'
			const index = state.data.findIndex((task) => task.id === action.payload?.id)
			state.data[index].completed = !state.data[index].completed

			state.data.sort((a, b) => {
				if (a.completed === b.completed) {
					return (b.id || 0) - (a.id || 0)
				}

				return a.completed ? 1 : -1
			})
		})
		builder.addCase(toggleTask.pending, (state) => {
			state.status.toggle = 'loading'
		})
		builder.addCase(toggleTask.rejected, (state, action) => {
			state.status.toggle = 'failed'
			state.error = action.error.message
		})
		builder.addCase(deleteTask.fulfilled, (state, action) => {
			state.status.delete = 'succeeded'
			state.data = state.data.filter((task) => task.id !== action.payload)
		})
		builder.addCase(deleteTask.pending, (state) => {
			state.status.delete = 'loading'
		})
		builder.addCase(deleteTask.rejected, (state, action) => {
			state.status.delete = 'failed'
			state.error = action.error.message
		})
		builder.addCase(updateTask.fulfilled, (state, action) => {
			state.status.update = 'succeeded'
			const index = state.data.findIndex((task) => task.id === action.payload?.id)
			state.data[index].text = action.meta.arg.text
			state.data[index].completed = action.meta.arg.completed

			state.data.sort((a, b) => {
				if (a.completed === b.completed) {
					return (b.id || 0) - (a.id || 0)
				}

				return a.completed ? 1 : -1
			})
		})
		builder.addCase(updateTask.pending, (state) => {
			state.status.update = 'loading'
		})
		builder.addCase(updateTask.rejected, (state, action) => {
			state.status.update = 'failed'
			state.error = action.error.message
		})
	}
})

export default taskSlice
