import { colors, fontFamily, gloablStyles, sizes } from '@/themes'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type HeaderProps = {
	title?: string
}

export function Header(props: HeaderProps) {
	return (
		<View style={[styles.header, gloablStyles.shadow]}>
			<Text style={styles.title}>{props.title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: sizes.height.header,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingLeft: sizes.padding.container,
		paddingRight: 10
	},
	title: {
		fontSize: sizes.fontSize.xl,
		fontFamily: fontFamily.OpenSans.Bold
	}
})
