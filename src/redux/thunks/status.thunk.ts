import {
	$addStatus,
	$deleteStatus,
	$fetchStatus,
	$fetchstatuses,
	$updateStatus
} from '@db/services'
import { createServiceThunk } from './utils'

export const fetchStatuses = createServiceThunk('statuses/fetchStatuses', $fetchstatuses)
export const addStatus = createServiceThunk('statuses/addStatus', $addStatus)
export const deleteStatus = createServiceThunk('statuses/deleteStatus', $deleteStatus)
export const updateStatus = createServiceThunk('statuses/updateStatus', $updateStatus)
export const fetchStatus = createServiceThunk('statuses/fetchStatus', $fetchStatus)
