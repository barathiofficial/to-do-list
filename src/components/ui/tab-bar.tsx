import { colors, fontFamily, sizes } from '@/themes'
import * as Icons from '@expo/vector-icons'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { CommonActions } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { BottomNavigation } from 'react-native-paper'

type Screen = {
	name: string
	title: string
	icon: keyof typeof Icons.Feather.glyphMap
	options?: {
		headerShown?: boolean
	}
}

export const tabBarScreens: Screen[] = [
	{
		name: '(tasks)',
		title: 'Tasks',
		icon: 'check-circle',
		options: {
			headerShown: false
		}
	},
	{
		name: 'ideas',
		title: 'Ideas',
		icon: 'cloud-lightning'
	}
]

export function TabBar({ navigation, state, insets }: BottomTabBarProps) {
	return (
		<BottomNavigation.Bar
			activeColor={colors.tabBar.active}
			inactiveColor={colors.tabBar.inactive}
			navigationState={state}
			safeAreaInsets={insets}
			style={styles.tabBar}
			activeIndicatorStyle={{
				backgroundColor: colors.primary.darkTeal + '20'
			}}
			renderIcon={({ route, color }) => {
				const icon = tabBarScreens.find((screen) => screen.name === route.name)?.icon

				return (
					<Icons.Feather
						color={color}
						name={icon}
						size={24}
					/>
				)
			}}
			renderLabel={({ route, color }) => {
				const label = tabBarScreens.find((screen) => screen.name === route.name)?.title

				return <Text style={[styles.label, { color }]}>{label}</Text>
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
		fontSize: 12,
		fontFamily: fontFamily.Poppins.Medium,
		textAlign: 'center'
	}
})
