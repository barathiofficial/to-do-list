import StoreProvider from '@/redux/context/StoreProvider'
import { gloablStyles } from '@/themes'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import React, { useCallback } from 'react'
import { Text } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()

export default function AppLayout() {
	const [fontsLoaded, fontError] = useFonts({
		PoppinsRegular: require('@/assets/fonts/Poppins-Regular.ttf'),
		PoppinsMedium: require('@/assets/fonts/Poppins-Medium.ttf'),
		PoppinsSemiBold: require('@/assets/fonts/Poppins-SemiBold.ttf'),
		PoppinsBold: require('@/assets/fonts/Poppins-Bold.ttf')
	})

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded, fontError])

	if (!fontsLoaded && !fontError) {
		return <Text>Loading fonts...</Text>
	}

	return (
		<StoreProvider>
			<PaperProvider>
				<SafeAreaView
					style={gloablStyles.container}
					onLayout={onLayoutRootView}>
					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen name='(tabs)' />
					</Stack>
				</SafeAreaView>
			</PaperProvider>
		</StoreProvider>
	)
}
