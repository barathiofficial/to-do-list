import { colors } from '@constants'
import { gloablStyles, sizes, typography } from '@themes'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type HeaderProps = {
	title?: string
}

export function Header(props: HeaderProps) {
	return (
		<View style={[styles.header, gloablStyles.shadow]}>
			<Text style={typography.lg}>{props.title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: sizes.headerHeight,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingLeft: sizes.containerPadding,
		paddingRight: 10
	}
})
