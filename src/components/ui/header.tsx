import { colors, fontFamily, gloablStyles, ripple, sizes } from '@/themes'
import * as Icons from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type HeaderProps = {
	title?: string
	showBackButton?: boolean
}

export function Header(props: HeaderProps) {
	function goBack() {
		if (router.canGoBack()) {
			router.back()
		}
	}

	return (
		<View style={[styles.header, gloablStyles.shadow]}>
			{props.showBackButton && (
				<Pressable
					android_ripple={ripple.dark}
					style={styles.backButton}
					onPress={goBack}>
					<Icons.Ionicons
						color={colors.white}
						name='arrow-back'
						size={24}
					/>
				</Pressable>
			)}
			<View style={[styles.main, styles.withBackButton]}>
				<Text style={styles.title}>{props.title}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: sizes.height.header,
		backgroundColor: colors.primary.darkTeal,
		alignItems: 'center',
		flexDirection: 'row'
	},
	backButton: {
		height: sizes.height.header,
		paddingHorizontal: sizes.padding.container,
		justifyContent: 'center'
	},
	main: {
		flex: 1,
		paddingLeft: sizes.padding.container,
		paddingRight: sizes.padding.container / 2,
		alignItems: 'center',
		flexDirection: 'row'
	},
	withBackButton: {
		paddingLeft: sizes.padding.container / 2
	},
	title: {
		color: colors.white,
		fontSize: sizes.fontSize.xl,
		fontFamily: fontFamily.Poppins.SemiBold,
		flex: 1,
		marginTop: 1.5
	}
})
