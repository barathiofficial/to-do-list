import type { Status as TStatus } from '@db/services'
import { addStatus, deleteStatus, fetchStatuses, updateStatus } from '@redux/thunks'
import { createSlice } from '@reduxjs/toolkit'

type Status = 'idle' | 'loading' | 'succeeded' | 'failed'

type StatusState = {
	data: TStatus[]
	status: {
		add: Status
		fetch: Status
		update: Status
		delete: Status
	}
	error: string | null | undefined
}

const initialState: StatusState = {
	data: [],
	status: {
		add: 'idle',
		fetch: 'idle',
		update: 'idle',
		delete: 'idle'
	},
	error: null
}

const statusSlice = createSlice({
	name: 'status',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchStatuses.fulfilled, (state, action) => {
			state.data = action.payload || []
			state.status.fetch = 'succeeded'
		})
		builder.addCase(fetchStatuses.pending, (state) => {
			state.status.fetch = 'loading'
		})
		builder.addCase(fetchStatuses.rejected, (state, action) => {
			state.status.fetch = 'failed'
			state.error = action.error.message
		})
		builder.addCase(addStatus.fulfilled, (state, action) => {
			state.status.add = 'succeeded'

			if (action.payload) {
				state.data.unshift(action.payload)
			}
		})
		builder.addCase(addStatus.pending, (state) => {
			state.status.add = 'loading'
		})
		builder.addCase(addStatus.rejected, (state, action) => {
			state.status.add = 'failed'
			state.error = action.error.message
		})
		builder.addCase(deleteStatus.fulfilled, (state, action) => {
			state.status.delete = 'succeeded'
			state.data = state.data.filter((s) => s.id !== action.payload)
		})
		builder.addCase(deleteStatus.pending, (state) => {
			state.status.delete = 'loading'
		})
		builder.addCase(deleteStatus.rejected, (state, action) => {
			state.status.delete = 'failed'
			state.error = action.error.message
		})
		builder.addCase(updateStatus.fulfilled, (state, action) => {
			state.status.update = 'succeeded'
			const index = state.data.findIndex((s) => s.id === action.payload?.id)

			if (index !== -1) {
				state.data[index] = action.payload
			}
		})
		builder.addCase(updateStatus.pending, (state) => {
			state.status.update = 'loading'
		})
		builder.addCase(updateStatus.rejected, (state, action) => {
			state.status.update = 'failed'
			state.error = action.error.message
		})
	}
})

export default statusSlice
