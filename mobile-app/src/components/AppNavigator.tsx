import { Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function AppNavigator() {
	const store = useSelector((s) => s)
	const s = JSON.stringify(store)
	console.log({ s })

	return <Text>App navigator</Text>
}
