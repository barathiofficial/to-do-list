// App.js
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AppNavigator from './src/components/AppNavigator'
import { persistor, store } from './src/redux/store'

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppNavigator />
			</PersistGate>
		</Provider>
	)
}
