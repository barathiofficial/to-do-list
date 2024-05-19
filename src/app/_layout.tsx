import StoreProvider from '@/redux/context/StoreProvider'
import { gloablStyles } from '@/themes'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()

export default function AppLayout() {
	const [fontsLoaded, fontError] = useFonts({
		OpenSansRegular: require('@/assets/fonts/OpenSans-Regular.ttf'),
		OpenSansMedium: require('@/assets/fonts/OpenSans-Medium.ttf'),
		OpenSansSemiBold: require('@/assets/fonts/OpenSans-SemiBold.ttf'),
		OpenSansBold: require('@/assets/fonts/OpenSans-Bold.ttf')
	})

	const onLayoutRootView = React.useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded, fontError])

	if (!fontsLoaded && !fontError) {
		return <Text>Loading fonts...</Text>
	}

	return (
		<SafeAreaView
			style={gloablStyles.container}
			onLayout={onLayoutRootView}>
			<StoreProvider>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name='(tabs)' />
				</Stack>
			</StoreProvider>
		</SafeAreaView>
	)
}
