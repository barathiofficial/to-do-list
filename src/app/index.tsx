import { Header, Input, Task } from '@components'
import colors from '@lib/colors'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { setCurrentId } from '@redux/slices'
import { addTask, deleteTask, fetchTasks, toggleTask } from '@redux/thunks'
import type { Task as ITask } from '@services'
import React from 'react'
import type { ListRenderItemInfo } from 'react-native'
import { FlatList, StyleSheet, View } from 'react-native'

export default function App() {
	const dispatch = useAppDispatch()
	const task = useAppSelector((state) => state.task)

	const [text, setText] = React.useState('')
	const [inputVisible, setInputVisible] = React.useState(false)

	function toggleInput() {
		if (inputVisible) {
			hideInput()
		} else {
			showInput()
		}
	}

	function showInput() {
		setInputVisible(true)
	}

	function hideInput() {
		setText('')
		setInputVisible(false)
	}

	function onChangeText(text: string) {
		setText(text)
	}

	function createTask() {
		if (text.trim()) {
			dispatch(addTask(text.trim())).finally(() => {
				hideInput()
			})
		} else {
			hideInput()
		}
	}

	function toggleCompletion(id?: number) {
		return function () {
			dispatch(toggleTask(id || 0))
		}
	}

	function removeTask(id?: number) {
		return function () {
			dispatch(setCurrentId(id))
			dispatch(deleteTask(id || 0))
		}
	}

	const renderItem = React.useCallback((data: ListRenderItemInfo<ITask>) => {
		return (
			<Task
				completed={data.item.completed}
				text={data.item.text}
				onCheck={toggleCompletion(data.item.id)}
				onDelete={removeTask(data.item.id)}
			/>
		)
	}, [])

	React.useEffect(() => {
		dispatch(fetchTasks())
	}, [])

	return (
		<View style={styles.container}>
			<Header
				inputVisible={inputVisible}
				onIconPress={toggleInput}
			/>
			{inputVisible && (
				<Input
					autoFocus
					cursorColor={colors.medium}
					loading={task.status.add === 'loading'}
					placeholder='Write task...'
					placeholderTextColor={colors.medium}
					value={text}
					onCancel={hideInput}
					onChangeText={onChangeText}
					onConfirm={createTask}
				/>
			)}
			<FlatList
				data={task.data}
				keyExtractor={(item) => item.id?.toString() ?? ''}
				renderItem={renderItem}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {}
})
