const teal = '#008080'
const darkTeal = '#006666'
const lightGray = '#F8F9FA'
const darkGray = '#6C757D'
const orange = '#FFA500'
const darkOrange = '#FF8C00'
const white = '#FFFFFF'
const black = '#000000'
const eerieBlack = '#212529'
const gainsboro = '#E0E0E0'
const azure = '#007BFF'
const denim = '#0056B3'
const greenery = '#28A745'
const darkGreenery = '#218838'
const orangeRed = '#FF4500'
const firebrick = '#B22222'
const gold = '#FFD700'
const amber = '#FFC107'
const cultured = '#F3F3F3'
const onyx = '#393939'

export const colors = {
	white,
	black,
	primary: {
		teal,
		darkTeal
	},
	accent: {
		background: lightGray,
		text: {
			primary: eerieBlack,
			secondary: darkGray
		}
	},
	button: {
		addTask: {
			teal,
			darkTeal
		}
	},
	border: {
		lightGray: gainsboro
	},
	status: {
		todo: {
			bright: {
				background: azure + '20',
				foreground: azure
			},
			dark: {
				background: denim + '20',
				foreground: denim
			}
		},
		progress: {
			bright: {
				background: orange + '20',
				foreground: orange
			},
			dark: {
				background: darkOrange + '20',
				foreground: darkOrange
			}
		},
		done: {
			bright: {
				background: greenery + '20',
				foreground: greenery
			},
			dark: {
				background: darkGreenery + '20',
				foreground: darkGreenery
			}
		}
	},
	priority: {
		high: {
			bright: orangeRed,
			dark: firebrick
		},
		medium: {
			bright: orange,
			dark: darkOrange
		},
		low: {
			bright: gold,
			dark: amber
		}
	},
	tabBar: {
		background: lightGray,
		active: teal,
		inactive: darkGray
	},
	ripple: {
		light: cultured,
		dark: onyx
	}
}
