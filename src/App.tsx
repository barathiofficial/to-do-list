import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BottomTabNavigator } from './navigators'

function App() {
	return (
		<SafeAreaView>
			<StatusBar />
			<NavigationContainer>
				<BottomTabNavigator />
			</NavigationContainer>
		</SafeAreaView>
	)
}

export default App
