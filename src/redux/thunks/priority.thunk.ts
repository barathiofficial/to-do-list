import {
	$addPriority,
	$deletePriority,
	$fetchPriorities,
	$fetchPriority,
	$updatePriority
} from '@db/services'
import { createServiceThunk } from './utils'

export const fetchPriorities = createServiceThunk('priorities/fetchPriorities', $fetchPriorities)
export const addPriority = createServiceThunk('priorities/addPriority', $addPriority)
export const deletePriority = createServiceThunk('priorities/deletePriority', $deletePriority)
export const updatePriority = createServiceThunk('priorities/updatePriority', $updatePriority)
export const fetchPriority = createServiceThunk('priorities/fetchPriority', $fetchPriority)
