import type { SelectModalData } from '@components/modal'
import { SelectModal } from '@components/modal'
import { Input, Modal, Select } from '@components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { fetchCategories, fetchPriorities, fetchStatuses } from '@redux/thunks'
import { gloablStyles, sizes } from '@themes'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, ScrollView, StyleSheet } from 'react-native'
import { z } from 'zod'

const newTaskSchema = z.object({
	task: z.string().min(3, 'Task must be at least 3 characters long'),
	description: z.string().min(3, 'Description must be at least 3 characters long').nullable(),
	categoryId: z.number().int().positive(),
	statusId: z.number().int().positive(),
	priorityId: z.number().int().positive(),
	dueDate: z.date().min(new Date(), 'Due date must be in the future').nullable()
})

type IdField = 'categoryId' | 'statusId' | 'priorityId'

export default function NewTask() {
	const dispatch = useAppDispatch()

	const categories = useAppSelector((state) => state.category.data)
	const priorities = useAppSelector((state) => state.priority.data)
	const statuses = useAppSelector((state) => state.status.data)

	const [modalTitle, setModalTitle] = React.useState('')
	const [showModal, setShowModal] = React.useState(false)
	const [modalField, setModalField] = React.useState<IdField>('categoryId')
	const [modalData, setModalData] = React.useState<SelectModalData[]>([])

	const form = useForm({
		resolver: zodResolver(newTaskSchema),
		defaultValues: {
			task: '',
			description: null,
			categoryId: 1,
			statusId: 1,
			priorityId: 1,
			dueDate: null
		}
	})

	function hideModal() {
		setShowModal(false)
	}

	function openSelectModal(field: IdField) {
		return function () {
			setModalField(field)
			setShowModal(true)

			switch (field) {
				case 'categoryId':
					setModalTitle('Select category')
					setModalData(categories)
					break
				case 'statusId':
					setModalTitle('Select status')
					setModalData(statuses)
					break
				case 'priorityId':
					setModalTitle('Select priority')
					setModalData(priorities)
					break
			}
		}
	}

	function onSubmit(/* data: z.infer<typeof newTaskSchema> */) {
		// console.log(data)
	}

	React.useEffect(() => {
		dispatch(fetchCategories())
		dispatch(fetchStatuses())
		dispatch(fetchPriorities())
	}, [])

	return (
		<React.Fragment>
			<Modal
				title={modalTitle}
				visible={showModal}>
				<SelectModal
					close={hideModal}
					control={form.control}
					data={modalData}
					name={modalField}
				/>
			</Modal>
			<ScrollView
				keyboardShouldPersistTaps='handled'
				style={[gloablStyles.container, styles.container]}>
				<Input
					autoFocus
					control={form.control}
					label='Task'
					name='task'
					placeholder='Enter task'
				/>
				<Input
					multiline
					control={form.control}
					label='Description'
					name='description'
					placeholder='Enter description'
				/>
				<Select
					error={form.formState.errors.categoryId?.message}
					label='Category'
					placeholder='Select category'
					value={categories.find((c) => c.id === form.getValues('categoryId'))?.name}
					onPress={openSelectModal('categoryId')}
				/>
				<Select
					error={form.formState.errors.statusId?.message}
					label='Status'
					placeholder='Select status'
					value={statuses.find((s) => s.id === form.getValues('statusId'))?.name}
					onPress={openSelectModal('statusId')}
				/>
				<Select
					error={form.formState.errors.priorityId?.message}
					label='Priority'
					placeholder='Select priority'
					value={priorities.find((p) => p.id === form.getValues('priorityId'))?.name}
					onPress={openSelectModal('priorityId')}
				/>
				<Button
					title='Submit'
					onPress={form.handleSubmit(onSubmit)}
				/>
			</ScrollView>
		</React.Fragment>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: sizes.padding.container
	}
})
