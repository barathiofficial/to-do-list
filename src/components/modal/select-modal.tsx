import { PickItem } from '@components/ui'
import React from 'react'
import type { Control, FieldValues, Path, PathValue } from 'react-hook-form'
import { useController } from 'react-hook-form'
import type { ListRenderItemInfo } from 'react-native'
import { FlatList } from 'react-native'

export type SelectModalData = {
	id: number
	name: string
}

type SelectCategoryProps<T extends FieldValues> = {
	close?: () => void
	control?: Control<T>
	name?: Path<T>
	data?: SelectModalData[]
}

export function SelectModal<T extends FieldValues>(props: SelectCategoryProps<T>) {
	const controller = useController({
		control: props.control,
		name: props.name as Path<T>,
		defaultValue: -1 as PathValue<T, Path<T>>
	})

	function select(id?: number) {
		return function () {
			controller.field.onChange(id)
			props.close?.()
		}
	}

	const renderItem = React.useCallback((info: ListRenderItemInfo<SelectModalData>) => {
		return (
			<PickItem
				lastItem={info.index === (props.data || []).length - 1}
				selected={controller.field.value === info.item.id}
				text={info.item.name}
				onSelect={select(info.item.id)}
			/>
		)
	}, [])

	return (
		<FlatList
			data={props.data}
			keyExtractor={(d) => d.id.toString()}
			renderItem={renderItem}
		/>
	)
}
