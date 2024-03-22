// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

const rootReducer = combineReducers({
	counter: counterReducer
	// Add other reducers here if you have any
})

export default rootReducer
