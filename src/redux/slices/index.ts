import { combineReducers } from 'redux'
import categorySlice from './category.slice'
import prioritySlice from './priority.slice'
import statusSlice from './status.slice'
import taskSlice from './task.slice'

const reducer = combineReducers({
	[taskSlice.name]: taskSlice.reducer,
	[categorySlice.name]: categorySlice.reducer,
	[prioritySlice.name]: prioritySlice.reducer,
	[statusSlice.name]: statusSlice.reducer
})

export default reducer

export * from './category.slice'
export * from './priority.slice'
export * from './status.slice'
export * from './task.slice'
