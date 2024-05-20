import store from '@/redux/store'
import type { PropsWithChildren } from 'react'
import React from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider(props: PropsWithChildren) {
	return <Provider store={store}>{props.children}</Provider>
}
