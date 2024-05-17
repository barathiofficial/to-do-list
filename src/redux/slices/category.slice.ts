import type { Category } from '@db/services'
import { addCategory, deleteCategory, fetchCategories, updateCategory } from '@redux/thunks'
import { createSlice } from '@reduxjs/toolkit'

type Status = 'idle' | 'loading' | 'succeeded' | 'failed'

type CategoryState = {
	data: Category[]
	status: {
		add: Status
		fetch: Status
		update: Status
		delete: Status
	}
	error: string | null | undefined
}

const initialState: CategoryState = {
	data: [],
	status: {
		add: 'idle',
		fetch: 'idle',
		update: 'idle',
		delete: 'idle'
	},
	error: null
}

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.data = action.payload || []
			state.status.fetch = 'succeeded'
		})
		builder.addCase(fetchCategories.pending, (state) => {
			state.status.fetch = 'loading'
		})
		builder.addCase(fetchCategories.rejected, (state, action) => {
			state.status.fetch = 'failed'
			state.error = action.error.message
		})
		builder.addCase(addCategory.fulfilled, (state, action) => {
			state.status.add = 'succeeded'

			if (action.payload) {
				state.data.unshift(action.payload)
			}
		})
		builder.addCase(addCategory.pending, (state) => {
			state.status.add = 'loading'
		})
		builder.addCase(addCategory.rejected, (state, action) => {
			state.status.add = 'failed'
			state.error = action.error.message
		})
		builder.addCase(deleteCategory.fulfilled, (state, action) => {
			state.status.delete = 'succeeded'
			state.data = state.data.filter((category) => category.id !== action.payload)
		})
		builder.addCase(deleteCategory.pending, (state) => {
			state.status.delete = 'loading'
		})
		builder.addCase(deleteCategory.rejected, (state, action) => {
			state.status.delete = 'failed'
			state.error = action.error.message
		})
		builder.addCase(updateCategory.fulfilled, (state, action) => {
			state.status.update = 'succeeded'
			const index = state.data.findIndex((category) => category.id === action.payload?.id)

			if (index !== -1) {
				state.data[index] = action.payload
			}
		})
		builder.addCase(updateCategory.pending, (state) => {
			state.status.update = 'loading'
		})
		builder.addCase(updateCategory.rejected, (state, action) => {
			state.status.update = 'failed'
			state.error = action.error.message
		})
	}
})

export default categorySlice
