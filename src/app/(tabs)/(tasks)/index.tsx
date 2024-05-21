import { Task } from '@/components/task'
import { Container, FloatingButton } from '@/components/ui'
import { goTo } from '@/utils'
import React, { Fragment } from 'react'

export default function Tasks() {
	return (
		<Fragment>
			<Container>
				<Task
					category='shopping'
					notes='Buy some milk and bread'
					priority='low'
					status='todo'
					task='Go to shopping'
				/>
				<Task
					category='work'
					notes='Call John to discuss the project'
					priority='high'
					status='progress'
					task='Call John'
				/>
				<Task
					category='finance'
					notes='Pay the bills'
					priority='medium'
					status='done'
					task='Pay the bills'
				/>
			</Container>

			<FloatingButton onPress={goTo('new-task')} />
		</Fragment>
	)
}
