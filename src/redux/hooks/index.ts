import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store'

export const useAppSelector = useSelector as <TSelected = unknown>(
	selector: (state: RootState) => TSelected,
	equalityFn?: (left: TSelected, right: TSelected) => boolean
) => TSelected
export const useAppDispatch = () => useDispatch<AppDispatch>()
