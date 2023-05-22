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
				sans: ['var(--font-hanken-grotesk)'],
			},
			colors: {
				lightRed: 'hsl(var(--color-light-red))',
				orangeYellow: 'hsl(var(--color-orange-yellow))',
				greenTeal: 'hsl(var(--color-green-teal))',
				cobaltBlue: 'hsl(var(--color-cobalt-blue))',
				lightSlateBlue: 'hsl(var(--color-light-slate-blue))',
				lightRoyalBlue: 'hsl(var(--color-light-royal-blue))',
				violetBlue: 'hsl(var(--color-violet-blue) / 1)',
				persianBlue: 'hsl(var(--color-persian-blue))',
				paleBlue: 'hsl(var(--color-pale-blue))',
				lightLavender: 'hsl(var(--color-light-lavender))',
				darkGrayBlue: 'hsl(var(--color-dark-gray-blue) / 1)',
			},
		},
	},
	plugins: [],
}
