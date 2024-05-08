import { combineReducers } from 'redux'
import taskSlice from './task.slice'

const reducer = combineReducers({
	[taskSlice.name]: taskSlice.reducer
})

export default reducer

export * from './task.slice'
