const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	content: [
		'../../packages/components/**/*.{html,js,svelte,svx,ts}',
		'./src/**/*.{html,js,svelte,svx,ts}',
		'./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}'
	],

	darkMode: 'class',
	variants: {},

	plugins: [
		/* Typography
		 ***************************************/
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@brainandbones/skeleton/tailwind/theme.cjs')
	]
}

module.exports = config
