/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'lexend-deca': 'var(--font-lexend-deca)',
				'big-shoulders-display': 'var(--font-big-shoulders-display)',
			},
			colors: {
				orange: {
					650: '#E28625',
				},
				cyan: {
					650: '#006971',
					850: '#004140',
				},
			},
		},
	},
	plugins: [],
}
