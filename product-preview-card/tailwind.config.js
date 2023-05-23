/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				cream: '#F2EAE2',
				aurometal: '#6C7289',
				gunmetal: '#1C232B',
				aquamarine: '#3D8168',
				deepAquamarine: '#1A4032',
			},
			fontFamily: {
				fraunces: ['var(--font-fraunces)'],
				montserrat: ['var(--font-montserrat)'],
			},
		},
	},
	plugins: [],
}
