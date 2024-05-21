import { Header, TabBar, tabBarScreens } from '@/components/ui'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabsLayout() {
	return (
		<Tabs
			tabBar={(props) => <TabBar {...props} />}
			screenOptions={{
				tabBarHideOnKeyboard: true
			}}>
			{tabBarScreens.map((screen) => {
				return (
					<Tabs.Screen
						key={screen.name}
						name={screen.name}
						options={{
							...screen.options,
							lazy: true,
							header: function () {
								return <Header title={screen.title} />
							}
						}}
					/>
				)
			})}
		</Tabs>
	)
}
