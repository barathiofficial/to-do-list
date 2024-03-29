import React from 'react'
import { addTodo } from './redux/slices/tasksSlice'
import { useAppDispatch, useAppSelector } from './redux/store'

export default function Home() {
	const dispatch = useAppDispatch()
	const tasks = useAppSelector((state) => state.tasks)

	const [task, setTask] = React.useState('')

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		if (task.trim()) {
			dispatch(addTodo(task.trim()))
		}
	}

	function handleTask(e: React.ChangeEvent<HTMLInputElement>) {
		setTask(e.target.value)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' onChange={handleTask} value={task} />
				<button type='submit'>Save</button>
			</form>

			<ul>
				{tasks.map((task) => {
					return <li key={task.id}>{task.text}</li>
				})}
			</ul>
		</div>
	)
}
