import { Task } from '@/components/task'
import { Container, FloatingButton } from '@/components/ui'
import { useNavigation } from '@react-navigation/native'
import { Fragment } from 'react'

export function Tasks() {
	const navigation = useNavigation()

	function goTo(route: string) {
		return function () {
			navigation.navigate(route)
		}
	}

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
