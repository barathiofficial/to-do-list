const white = '#FFFFFF'
const black = '#000000'

const teal500 = '#008080'
const teal500b = '#009688'
const teal700 = '#006666'

const gray50 = '#F3F3F3'
const gray50b = '#F0F0F0'
const gray100 = '#F8F9FA'
const gray200 = '#E0E0E0'
const gray300 = '#CCCCCC'
const gray400 = '#A9A9A9'
const gray500 = '#9E9E9E'
const gray600 = '#6C757D'
const gray800 = '#212529'
const gray900 = '#393939'

const blue100 = '#007BFF20'
const blue500 = '#007BFF'
const blue500b = '#2196F3'
const blue700 = '#0056B3'

const orange100 = '#FFA50020'
const orange500 = '#FFA500'
const orange700 = '#FF8C00'

const green100 = '#28A74520'
const green500 = '#28A745'
const green500b = '#4CAF50'
const green700 = '#218838'

const red500 = '#FF4500'
const red500b = '#F44336'
const red700 = '#B22222'

const yellow300 = '#FFEB3B'
const yellow500 = '#FFD700'
const yellow700 = '#FFC107'

const purple500 = '#9C27B0'

const deepPurple500 = '#673AB7'

const brown500 = '#795548'

const pink500 = '#E91E63'

const indigo500 = '#3F51B5'

const blueGray500 = '#607D8B'

export const colors = {
	white,
	black,
	primary: {
		teal: teal500,
		darkTeal: teal700
	},
	accent: {
		background: gray100,
		text: {
			primary: gray800,
			secondary: gray600
		}
	},
	button: {
		addTask: {
			teal: teal500,
			darkTeal: teal700
		}
	},
	border: {
		lightGray: gray200
	},
	status: {
		todo: {
			bright: {
				background: blue100,
				foreground: blue500
			},
			dark: {
				background: blue700 + '20',
				foreground: blue700
			}
		},
		progress: {
			bright: {
				background: orange100,
				foreground: orange500
			},
			dark: {
				background: orange700 + '20',
				foreground: orange700
			}
		},
		done: {
			bright: {
				background: green100,
				foreground: green500
			},
			dark: {
				background: green700 + '20',
				foreground: green700
			}
		}
	},
	priority: {
		high: {
			bright: red500,
			dark: red700
		},
		medium: {
			bright: orange500,
			dark: orange700
		},
		low: {
			bright: yellow500,
			dark: yellow700
		}
	},
	tabBar: {
		background: gray100,
		active: teal500,
		inactive: gray600
	},
	ripple: {
		light: gray50,
		dark: gray900
	},
	textInput: {
		label: gray800,
		error: red500,
		placeholder: gray400,
		border: {
			default: gray300,
			focused: teal500,
			error: red500
		},
		background: {
			default: white,
			disabled: gray50b
		},
		text: {
			default: gray800,
			disabled: gray600
		}
	},
	categories: {
		shopping: {
			background: green500b,
			foreground: white
		},
		education: {
			background: blue500b,
			foreground: white
		},
		work: {
			background: gray500,
			foreground: white
		},
		personal: {
			background: purple500,
			foreground: white
		},
		health: {
			background: red500b,
			foreground: white
		},
		finance: {
			background: yellow500,
			foreground: black
		},
		entertainment: {
			background: yellow300,
			foreground: black
		},
		travel: {
			background: teal500b,
			foreground: white
		},
		errands: {
			background: orange500,
			foreground: white
		},
		household: {
			background: brown500,
			foreground: white
		},
		hobbies: {
			background: deepPurple500,
			foreground: white
		},
		fitness: {
			background: pink500,
			foreground: white
		},
		social: {
			background: indigo500,
			foreground: white
		},
		other: {
			background: blueGray500,
			foreground: white
		}
	}
}
