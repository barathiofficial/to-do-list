const WHITE = '#FFFFFF'
const BLACK = '#000000'

const TEAL_500 = '#008080'
const TEAL_600 = '#009688'
const TEAL_700 = '#006666'

const GRAY_50 = '#F3F3F3'
const GRAY_100 = '#F8F9FA'
const GRAY_200 = '#E0E0E0'
const GRAY_300 = '#CCCCCC'
const GRAY_400 = '#A9A9A9'
const GRAY_500 = '#9E9E9E'
const GRAY_600 = '#6C757D'
const GRAY_800 = '#212529'
const GRAY_900 = '#393939'

const BLUE_100 = '#007BFF20'
const BLUE_500 = '#007BFF'
const BLUE_600 = '#2196F3'
const BLUE_700 = '#0056B3'

const ORANGE_100 = '#FFA50020'
const ORANGE_500 = '#FFA500'
const ORANGE_700 = '#FF8C00'

const GREEN_100 = '#28A74520'
const GREEN_500 = '#28A745'
const GREEN_600 = '#4CAF50'
const GREEN_700 = '#218838'

const RED_500 = '#FF4500'
const RED_600 = '#F44336'
const RED_700 = '#B22222'

const YELLOW_300 = '#FFEB3B'
const YELLOW_500 = '#FFD700'
const YELLOW_700 = '#FFC107'

const VERY_LIGHT_GRAY = '#F0F0F0'
const PURPLE_500 = '#9C27B0'
const BROWN_500 = '#795548'
const DEEP_PURPLE_500 = '#673AB7'
const PINK_500 = '#E91E63'
const INDIGO_500 = '#3F51B5'
const BLUE_GRAY_500 = '#607D8B'

export const colors = {
	white: WHITE,
	black: BLACK,
	primary: {
		teal: TEAL_500,
		darkTeal: TEAL_700
	},
	accent: {
		background: GRAY_100,
		text: {
			primary: GRAY_800,
			secondary: GRAY_600
		}
	},
	button: {
		addTask: {
			teal: TEAL_500,
			darkTeal: TEAL_700
		}
	},
	border: {
		lightGray: GRAY_200
	},
	status: {
		todo: {
			bright: {
				background: BLUE_100,
				foreground: BLUE_500
			},
			dark: {
				background: BLUE_700 + '20',
				foreground: BLUE_700
			}
		},
		progress: {
			bright: {
				background: ORANGE_100,
				foreground: ORANGE_500
			},
			dark: {
				background: ORANGE_700 + '20',
				foreground: ORANGE_700
			}
		},
		done: {
			bright: {
				background: GREEN_100,
				foreground: GREEN_500
			},
			dark: {
				background: GREEN_700 + '20',
				foreground: GREEN_700
			}
		}
	},
	priority: {
		high: {
			bright: RED_500,
			dark: RED_700
		},
		medium: {
			bright: ORANGE_500,
			dark: ORANGE_700
		},
		low: {
			bright: YELLOW_500,
			dark: YELLOW_700
		}
	},
	tabBar: {
		background: GRAY_100,
		active: TEAL_500,
		inactive: GRAY_600
	},
	ripple: {
		light: GRAY_50,
		dark: GRAY_900
	},
	textInput: {
		label: GRAY_800,
		error: RED_500,
		placeholder: GRAY_400,
		selection: TEAL_500 + '80',
		border: {
			default: GRAY_300,
			focused: TEAL_500,
			error: RED_500
		},
		background: {
			default: WHITE,
			disabled: VERY_LIGHT_GRAY
		},
		text: {
			default: GRAY_800,
			disabled: GRAY_600
		}
	},
	categories: {
		shopping: {
			background: GREEN_600,
			foreground: WHITE
		},
		education: {
			background: BLUE_600,
			foreground: WHITE
		},
		work: {
			background: GRAY_500,
			foreground: WHITE
		},
		personal: {
			background: PURPLE_500,
			foreground: WHITE
		},
		health: {
			background: RED_600,
			foreground: WHITE
		},
		finance: {
			background: YELLOW_500,
			foreground: BLACK
		},
		entertainment: {
			background: YELLOW_300,
			foreground: BLACK
		},
		travel: {
			background: TEAL_600,
			foreground: WHITE
		},
		errands: {
			background: ORANGE_500,
			foreground: WHITE
		},
		household: {
			background: BROWN_500,
			foreground: WHITE
		},
		hobbies: {
			background: DEEP_PURPLE_500,
			foreground: WHITE
		},
		fitness: {
			background: PINK_500,
			foreground: WHITE
		},
		social: {
			background: INDIGO_500,
			foreground: WHITE
		},
		other: {
			background: BLUE_GRAY_500,
			foreground: WHITE
		}
	}
}
