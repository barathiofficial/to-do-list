import { colors } from '@constants'
import Feather from '@expo/vector-icons/Feather'
import { gloablStyles, ripple, sizes, typography } from '@themes'
import React from 'react'
import type { ModalProps as RNModalProps } from 'react-native'
import {
	Pressable,
	Modal as RNModal,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native'

type ModalProps = {
	title?: string
	children?: React.ReactNode
	onClose?: () => void
	closeOnTouchOutside?: boolean
	closeOnHardwareBackPress?: boolean
} & RNModalProps

export function Modal({
	title,
	children,
	onClose,
	closeOnHardwareBackPress = true,
	closeOnTouchOutside = true,
	animationType = 'fade',
	transparent = true,
	style,
	...props
}: ModalProps) {
	function close(type: 'back' | 'outside' | 'button') {
		return function () {
			switch (type) {
				case 'back':
					if (closeOnHardwareBackPress) onClose?.()
					break
				case 'outside':
					if (closeOnTouchOutside) onClose?.()
					break
				case 'button':
					onClose?.()
					break
			}
		}
	}

	return (
		<RNModal
			{...props}
			animationType={animationType}
			transparent={transparent}
			onRequestClose={close('back')}>
			<TouchableWithoutFeedback onPress={close('outside')}>
				<View style={[gloablStyles.container, styles.container]}>
					<TouchableWithoutFeedback>
						<View style={[styles.content, style]}>
							<View style={styles.header}>
								<Text style={[typography.md, styles.title]}>{title}</Text>
								<Pressable
									android_ripple={ripple.dark}
									style={styles.close}
									onPress={close('button')}>
									<Feather
										color={colors.light}
										name='x'
										size={24}
									/>
								</Pressable>
							</View>
							<View>{children}</View>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</TouchableWithoutFeedback>
		</RNModal>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.modal,
		padding: sizes.padding.container,
		justifyContent: 'center',
		alignItems: 'center'
	},
	content: {
		backgroundColor: colors.light,
		borderRadius: 10,
		overflow: 'hidden'
	},
	header: {
		backgroundColor: colors.primary,
		flexDirection: 'row'
	},
	title: {
		color: colors.light,
		flex: 1,
		padding: sizes.padding.modal
	},
	close: {
		padding: sizes.padding.modal
	}
})
