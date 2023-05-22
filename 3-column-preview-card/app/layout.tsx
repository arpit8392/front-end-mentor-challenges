import './globals.css'
import { Lexend_Deca, Big_Shoulders_Display } from 'next/font/google'

const lexend_deca = Lexend_Deca({
	subsets: ['latin'],
	weight: ['300', '400'],
	variable: '--font-lexend-deca',
})

const big_shoulders_display = Big_Shoulders_Display({
	subsets: ['latin'],
	weight: '700',
	variable: '--font-big-shoulders-display',
})

export const metadata = {
	title: '3 Columns Preview Card',
	description:
		'Multi Column Preview Card Component created using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${lexend_deca.variable} ${big_shoulders_display.variable}`}
			>
				{children}
			</body>
		</html>
	)
}
