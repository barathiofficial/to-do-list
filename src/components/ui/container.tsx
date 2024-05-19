import { gloablStyles } from '@/themes'
import React from 'react'
import type { ViewProps } from 'react-native'
import { View } from 'react-native'

export function Container({ children, style, ...props }: ViewProps) {
	return (
		<View
			{...props}
			style={[gloablStyles.container, style]}>
			{children}
		</View>
	)
}
