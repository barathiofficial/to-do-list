import { FloatingButton, Task as TaskItem } from '@components'
import { colors } from '@constants'
import type { Task } from '@db/services'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { deleteTask, fetchTasks } from '@redux/thunks'
import { gloablStyles, sizes, typography } from '@themes'
import { goTo } from '@utils'
import React from 'react'
import type { ListRenderItemInfo } from 'react-native'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Tasks() {
	const dispatch = useAppDispatch()
	const task = useAppSelector((state) => state.task)

	function removeTask(id: number) {
		return function () {
			dispatch(deleteTask(id))
		}
	}

	const renderTask = React.useCallback((data: ListRenderItemInfo<Task>) => {
		return (
			<TaskItem
				text={data.item.text}
				onDelete={removeTask(data.item.id)}
			/>
		)
	}, [])

	const renderNoTasks = React.useCallback(() => {
		return (
			<React.Fragment>
				{task.status.fetch === 'succeeded' && (
					<View style={styles.noTasksWrapper}>
						<Text style={[styles.noTasks, typography.md]}>No tasks</Text>
					</View>
				)}
			</React.Fragment>
		)
	}, [task.status.fetch])

	React.useEffect(() => {
		dispatch(fetchTasks())
	}, [])

	return (
		<React.Fragment>
			<FlatList
				data={task.data}
				keyExtractor={(item) => item.id.toString()}
				ListEmptyComponent={renderNoTasks}
				ListFooterComponent={View}
				ListFooterComponentStyle={styles.footer}
				refreshing={task.status.fetch === 'loading'}
				renderItem={renderTask}
				style={gloablStyles.container}
			/>
			<FloatingButton onPress={goTo('new-task')} />
		</React.Fragment>
	)
}

const styles = StyleSheet.create({
	input: {
		borderBottomColor: colors.light,
		borderBottomWidth: sizes.borderWidth,
		overflow: 'hidden'
	},
	noTasksWrapper: {
		height: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	noTasks: {
		textAlign: 'center'
	},
	footer: {
		marginBottom: 20
	}
})
