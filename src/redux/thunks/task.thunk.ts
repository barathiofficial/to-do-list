import { $addTask, $deleteTask, $fetchTask, $fetchTasks, $updateTask } from '@db/services'
import { createServiceThunk } from './utils'

export const fetchTasks = createServiceThunk('tasks/fetchTasks', $fetchTasks)
export const addTask = createServiceThunk('tasks/addTask', $addTask)
export const deleteTask = createServiceThunk('tasks/deleteTask', $deleteTask)
export const updateTask = createServiceThunk('tasks/updateTask', $updateTask)
export const fetchTask = createServiceThunk('tasks/fetchTask', $fetchTask)
