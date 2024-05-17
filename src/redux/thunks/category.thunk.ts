import {
	$addCategory,
	$deleteCategory,
	$fetchCategories,
	$fetchCategory,
	$updateCategory
} from '@db/services'
import { createServiceThunk } from './utils'

export const fetchCategories = createServiceThunk('categories/fetchCategories', $fetchCategories)
export const addCategory = createServiceThunk('categories/addCategory', $addCategory)
export const deleteCategory = createServiceThunk('categories/deleteCategory', $deleteCategory)
export const updateCategory = createServiceThunk('categories/updateCategory', $updateCategory)
export const fetchCategory = createServiceThunk('categories/fetchCategory', $fetchCategory)
