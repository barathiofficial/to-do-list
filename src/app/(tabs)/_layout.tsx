import { Header } from '@/components/ui'
import { colors, fontFamily, sizes } from '@/themes'
import * as Icons from '@expo/vector-icons'
import { CommonActions } from '@react-navigation/native'
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import { BottomNavigation } from 'react-native-paper'

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
			}}
			tabBar={({ navigation, state, descriptors, insets }) => (
				<BottomNavigation.Bar
					navigationState={state}
					safeAreaInsets={insets}
					getLabelText={({ route }) => {
						const { options } = descriptors[route.key]
						const label =
							options.tabBarLabel !== undefined
								? options.tabBarLabel
								: options.title !== undefined
									? options.title
									: route.title

						return label
					}}
					renderIcon={({ route, focused, color }) => {
						const { options } = descriptors[route.key]

						if (options.tabBarIcon) {
							return options.tabBarIcon({ focused, color, size: 24 })
						}

						return null
					}}
					onTabPress={({ route, preventDefault }) => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true
						})

						if (event.defaultPrevented) {
							preventDefault()
						} else {
							navigation.dispatch({
								...CommonActions.navigate(route.name, route.params),
								target: state.key
							})
						}
					}}
				/>
			)}>
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
							tabBarLabel: screen.title,
							tabBarIcon: ({ color, size }) => {
								return (
									<Icons.Feather
										color={color}
										name={screen.icon}
										size={size}
									/>
								)
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
