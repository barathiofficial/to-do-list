import { Task } from '@/components/task'
import { Container, FloatingButton } from '@/components/ui'
import { goTo } from '@/utils'
import React, { Fragment } from 'react'

export default function Tasks() {
	return (
		<Fragment>
			<Container>
				<Task
					notes='Buy some milk and bread'
					priority='low'
					status='todo'
					task='Go to shopping'
				/>
				<Task
					notes='Call John to discuss the project'
					priority='high'
					status='progress'
					task='Call John'
				/>
				<Task
					notes='Prepare the presentation for the meeting'
					priority='medium'
					status='done'
					task='Prepare the presentation'
				/>
			</Container>

			<FloatingButton onPress={goTo('new-task')} />
		</Fragment>
	)
}
