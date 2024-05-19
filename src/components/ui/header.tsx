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
		backgroundColor: colors.primary.darkTeal,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingLeft: sizes.padding.container,
		paddingRight: 10
	},
	title: {
		color: colors.white,
		fontSize: sizes.fontSize.xl,
		fontFamily: fontFamily.Poppins.SemiBold
	}
})
