import type { Priority } from '@db/services'
import { addPriority, deletePriority, fetchPriorities, updatePriority } from '@redux/thunks'
import { createSlice } from '@reduxjs/toolkit'

type Status = 'idle' | 'loading' | 'succeeded' | 'failed'

type PriorityState = {
	data: Priority[]
	status: {
		add: Status
		fetch: Status
		update: Status
		delete: Status
	}
	error: string | null | undefined
}

const initialState: PriorityState = {
	data: [],
	status: {
		add: 'idle',
		fetch: 'idle',
		update: 'idle',
		delete: 'idle'
	},
	error: null
}

const prioritySlice = createSlice({
	name: 'priority',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPriorities.fulfilled, (state, action) => {
			state.data = action.payload || []
			state.status.fetch = 'succeeded'
		})
		builder.addCase(fetchPriorities.pending, (state) => {
			state.status.fetch = 'loading'
		})
		builder.addCase(fetchPriorities.rejected, (state, action) => {
			state.status.fetch = 'failed'
			state.error = action.error.message
		})
		builder.addCase(addPriority.fulfilled, (state, action) => {
			state.status.add = 'succeeded'

			if (action.payload) {
				state.data.unshift(action.payload)
			}
		})
		builder.addCase(addPriority.pending, (state) => {
			state.status.add = 'loading'
		})
		builder.addCase(addPriority.rejected, (state, action) => {
			state.status.add = 'failed'
			state.error = action.error.message
		})
		builder.addCase(deletePriority.fulfilled, (state, action) => {
			state.status.delete = 'succeeded'
			state.data = state.data.filter((p) => p.id !== action.payload)
		})
		builder.addCase(deletePriority.pending, (state) => {
			state.status.delete = 'loading'
		})
		builder.addCase(deletePriority.rejected, (state, action) => {
			state.status.delete = 'failed'
			state.error = action.error.message
		})
		builder.addCase(updatePriority.fulfilled, (state, action) => {
			state.status.update = 'succeeded'
			const index = state.data.findIndex((p) => p.id === action.payload?.id)

			if (index !== -1) {
				state.data[index] = action.payload
			}
		})
		builder.addCase(updatePriority.pending, (state) => {
			state.status.update = 'loading'
		})
		builder.addCase(updatePriority.rejected, (state, action) => {
			state.status.update = 'failed'
			state.error = action.error.message
		})
	}
})

export default prioritySlice
