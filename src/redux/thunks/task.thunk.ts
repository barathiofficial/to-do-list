import { createAsyncThunk } from '@reduxjs/toolkit'
import * as services from '@services'

function createServiceThunk<R, A = void>(actionName: string, serviceFn: (args: A) => Promise<R>) {
	return createAsyncThunk<R, A>(actionName, async (args, api) => {
		try {
			return await serviceFn(args)
		} catch (error) {
			return api.rejectWithValue(error)
		}
	})
}

export const fetchTasks = createServiceThunk('tasks/fetchTasks', services.fetchTasks)
export const addTask = createServiceThunk('tasks/addTask', services.addTask)
export const toggleTask = createServiceThunk('tasks/toggleTask', services.toggleTask)
export const deleteTask = createServiceThunk('tasks/deleteTask', services.deleteTask)
export const updateTask = createServiceThunk('tasks/updateTask', services.updateTask)
