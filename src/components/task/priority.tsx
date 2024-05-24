import { colors } from '@/themes'
import { useCallback } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export type PriorityProps = {
	priority?: 'low' | 'medium' | 'high'
}

export function Priority(props: PriorityProps) {
	const color = colors.priority[props.priority || 'low'].dark

	const getIconName = useCallback(() => {
		switch (props.priority) {
			case 'low':
				return 'chevron-down'

			case 'medium':
				return 'equal'

			case 'high':
				return 'chevron-double-up'
		}

		return 'equal'
	}, [props.priority])

	return (
		<MaterialCommunityIcons
			color={color}
			name={getIconName()}
			size={18}
		/>
	)
}
