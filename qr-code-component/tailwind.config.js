/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				lightGrey: '#D5E1EF',
				darkNavy: '#1F314F',
				grey: '#7D889E',
			},
			fontFamily: {
				sans: ['var(--font-outfit)'],
			},
		},
	},
	plugins: [],
}
