import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import Home from './home'
import { persistor, store } from './redux/store'

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	)
}

export default App
