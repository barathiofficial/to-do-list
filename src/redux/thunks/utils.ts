import { createAsyncThunk } from '@reduxjs/toolkit'

export function createServiceThunk<R, A = void>(
	actionName: string,
	serviceFn: (args: A) => Promise<R>
) {
	return createAsyncThunk<R, A>(actionName, async (args, api) => {
		try {
			return await serviceFn(args)
		} catch (error) {
			return api.rejectWithValue(error)
		}
	})
}
