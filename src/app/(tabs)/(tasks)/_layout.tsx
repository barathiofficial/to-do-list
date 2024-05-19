import { Header } from '@/components/ui'
import { Stack } from 'expo-router'
import React from 'react'

const screens = [
	{
		id: 'index',
		title: 'Tasks'
	},
	{
		id: 'new-task',
		title: 'New Task',
		showBackButton: true
	}
]

export default function TasksLayout() {
	return (
		<Stack>
			{screens.map((screen) => {
				return (
					<Stack.Screen
						key={screen.id}
						name={screen.id}
						options={{
							header: function () {
								return (
									<Header
										showBackButton={screen.showBackButton}
										title={screen.title}
									/>
								)
							}
						}}
					/>
				)
			})}
		</Stack>
	)
}
