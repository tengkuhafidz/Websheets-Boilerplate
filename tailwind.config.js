module.exports = {
	purge: [
		'./pages/**/*.tsx',
		'./components/**/*.tsx',
		'./styles/**/*.css',
		'./utils/**/*.ts',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			ringWidth: ['hover'],
		},
	},
	plugins: [],
}
