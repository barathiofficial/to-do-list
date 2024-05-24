import { colors, fontFamily, sizes } from '@/themes'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'

type HeaderProps = {
	title?: string
	showBackButton?: boolean
}

export function Header(props: HeaderProps) {
	const navigation = useNavigation()

	function goBack() {
		if (navigation.canGoBack()) {
			navigation.goBack()
		}
	}

	return (
		<Appbar.Header
			elevated={true}
			mode='small'
			statusBarHeight={0}
			style={styles.header}>
			{props.showBackButton && (
				<Appbar.BackAction
					iconColor={colors.white}
					onPress={goBack}
				/>
			)}
			<Appbar.Content
				title={props.title || ''}
				titleStyle={styles.title}
			/>
		</Appbar.Header>
	)
}

const styles = StyleSheet.create({
	header: {
		height: sizes.height.header,
		backgroundColor: colors.primary.darkTeal
	},
	title: {
		color: colors.white,
		fontSize: sizes.fontSize.xl,
		fontFamily: fontFamily.Poppins.SemiBold
	}
})
