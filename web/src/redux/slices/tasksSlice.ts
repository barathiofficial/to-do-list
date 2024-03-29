import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'

type TaskStatus = 'to-do' | 'in-progress' | 'done'

type Task = {
	id: string
	text: string
	status: TaskStatus
}

const initialState: Task[] = []

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTodo: {
			reducer: (state, action: PayloadAction<Task>) => {
				state.push(action.payload)
			},
			prepare: (text: string) => {
				const id = nanoid()
				const status: TaskStatus = 'to-do'

				return {
					payload: {
						id,
						text,
						status
					}
				}
			}
		}
	}
})

// Action creators are generated for each case reducer function
export const { addTodo } = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer
