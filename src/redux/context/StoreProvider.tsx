import store from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider(props: React.PropsWithChildren) {
	return <Provider store={store}>{props.children}</Provider>
}
