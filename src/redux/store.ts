import { configureStore } from '@reduxjs/toolkit'
import reducer from './slices'
import * as thunks from './thunks'

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					...Object.values(thunks).reduce<string[]>((acc, thunk) => {
						return [
							...acc,
							thunk.fulfilled.type,
							thunk.pending.type,
							thunk.rejected.type
						]
					}, [])
				]
			}
		})
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
