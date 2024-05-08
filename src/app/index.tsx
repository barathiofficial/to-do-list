import { Header, Input, Task as TaskItem } from '@components'
import colors from '@lib/colors'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { addTask, deleteTask, fetchTasks, toggleTask } from '@redux/thunks'
import type { Task } from '@services'
import React from 'react'
import type { ListRenderItemInfo } from 'react-native'
import { Animated, FlatList, StyleSheet, View } from 'react-native'

export default function App() {
	const dispatch = useAppDispatch()
	const task = useAppSelector((state) => state.task)

	const [text, setText] = React.useState('')
	const [inputVisible, setInputVisible] = React.useState(false)
	const [rotatePlus, setRotatePlus] = React.useState(false)

	const inputHeight = React.useRef(new Animated.Value(0)).current

	function toggleInput() {
		if (inputVisible) {
			hideInput()
		} else {
			showInput()
		}
	}

	function showInput() {
		setRotatePlus(true)
		setInputVisible(true)
		Animated.timing(inputHeight, {
			toValue: 30,
			duration: 100,
			useNativeDriver: false
		}).start()
	}

	function hideInput() {
		setRotatePlus(false)
		Animated.timing(inputHeight, {
			toValue: 0,
			duration: 100,
			useNativeDriver: false
		}).start(() => {
			setText('')
			setInputVisible(false)
		})
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
			dispatch(deleteTask(id || 0))
		}
	}

	const renderItem = React.useCallback((data: ListRenderItemInfo<Task>) => {
		return (
			<TaskItem
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
				rotatePlus={rotatePlus}
				onIconPress={toggleInput}
			/>
			{inputVisible && (
				<Animated.View style={{ height: inputHeight, overflow: 'hidden' }}>
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
				</Animated.View>
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
