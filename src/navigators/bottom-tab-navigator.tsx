import { TabBar } from '@/components/ui'
import { Tasks } from '@/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export function BottomTabNavigator() {
	return (
		<Tab.Navigator tabBar={TabBar}>
			<Tab.Screen
				component={Tasks}
				name='Tasks'
			/>
		</Tab.Navigator>
	)
}
