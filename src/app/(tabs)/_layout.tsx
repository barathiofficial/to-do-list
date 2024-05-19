import { Header } from '@/components/ui'
import { colors, fontFamily, sizes } from '@/themes'
import * as Icons from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

type Screen = {
	id: string
	title: string
	icon: keyof typeof Icons.Feather.glyphMap
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
				tabBarStyle: styles.tabBar,
				tabBarHideOnKeyboard: true,
				tabBarActiveTintColor: colors.tabBar.active,
				tabBarInactiveTintColor: colors.tabBar.inactive
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
									<Icons.Feather
										color={color}
										name={screen.icon}
										size={24}
									/>
								)
							},
							tabBarLabel: function ({ color }) {
								return <Text style={[styles.label, { color }]}>{screen.title}</Text>
							}
						}}
					/>
				)
			})}
		</Tabs>
	)
}

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: colors.tabBar.background,
		height: sizes.height.tabBar,
		borderTopWidth: sizes.border.width,
		borderTopColor: colors.border.lightGray
	},
	label: {
		marginBottom: 5,
		fontSize: 12,
		fontFamily: fontFamily.Poppins.Medium
	}
})
