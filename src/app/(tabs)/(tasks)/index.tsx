import { FloatingButton, Task as TaskItem } from '@components'
import { colors } from '@constants'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { deleteTask, fetchTasks, toggleTask } from '@redux/thunks'
import type { Task } from '@services'
import { gloablStyles, sizes, typography } from '@themes'
import { goTo } from '@utils'
import React from 'react'
import type { ListRenderItemInfo } from 'react-native'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Tasks() {
	const dispatch = useAppDispatch()
	const task = useAppSelector((state) => state.task)

	function toggleCompletion(id: number) {
		return function () {
			dispatch(toggleTask(id))
		}
	}

	function removeTask(id: number) {
		return function () {
			dispatch(deleteTask(id))
		}
	}

	const renderTask = React.useCallback((data: ListRenderItemInfo<Task>) => {
		return (
			<TaskItem
				completed={data.item.completed}
				text={data.item.text}
				onCheck={toggleCompletion(data.item.id)}
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
		height: sizes.taskItemHeight,
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
