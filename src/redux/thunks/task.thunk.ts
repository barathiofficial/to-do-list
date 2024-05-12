import { createAsyncThunk } from '@reduxjs/toolkit'
import { $addTask, $deleteTask, $fetchTasks, $toggleTask, $updateTask } from '@services'

function createServiceThunk<R, A = void>(actionName: string, serviceFn: (args: A) => Promise<R>) {
	return createAsyncThunk<R, A>(actionName, async (args, api) => {
		try {
			return await serviceFn(args)
		} catch (error) {
			return api.rejectWithValue(error)
		}
	})
}

export const fetchTasks = createServiceThunk('tasks/fetchTasks', $fetchTasks)
export const addTask = createServiceThunk('tasks/addTask', $addTask)
export const toggleTask = createServiceThunk('tasks/toggleTask', $toggleTask)
export const deleteTask = createServiceThunk('tasks/deleteTask', $deleteTask)
export const updateTask = createServiceThunk('tasks/updateTask', $updateTask)
