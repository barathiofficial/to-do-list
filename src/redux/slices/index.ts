import { combineReducers } from 'redux'
import categorySlice from './category.slice'
import taskSlice from './task.slice'

const reducer = combineReducers({
	[taskSlice.name]: taskSlice.reducer,
	[categorySlice.name]: categorySlice.reducer
})

export default reducer

export * from './category.slice'
export * from './task.slice'
