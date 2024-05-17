import { Header } from '@components'
import { colors } from '@constants'
import Feather from '@expo/vector-icons/Feather'
import { Tabs } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

type Screen = {
	id: string
	title: string
	icon: 'check-circle' | 'cloud-lightning'
	options?: {
		headerShown?: boolean
	}
}

const screens: Screen[] = [
	{
		id: '(tasks)',
		title: 'Tasks',
		icon: 'check-circle',
		options: {
			headerShown: false
		}
	},
	{
		id: 'ideas',
		title: 'Ideas',
		icon: 'cloud-lightning'
	}
]

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.dark,
				tabBarInactiveTintColor: colors.light
			}}>
			{screens.map((screen) => {
				return (
					<Tabs.Screen
						key={screen.id}
						name={screen.id}
						options={{
							...screen.options,
							header: function () {
								return <Header title={screen.title} />
							},
							tabBarIcon: function ({ color }) {
								return (
									<Feather
										color={color}
										name={screen.icon}
										size={20}
									/>
								)
							},
							tabBarLabel: function ({ color }) {
								return (
									<Text style={{ color, marginBottom: 4, fontSize: 12 }}>
										{screen.title}
									</Text>
								)
							}
						}}
					/>
				)
			})}
		</Tabs>
	)
}
