import './globals.css'
import { Hanken_Grotesk } from 'next/font/google'

const hanken_grotesk = Hanken_Grotesk({
	subsets: ['latin'],
	weight: ['500', '700', '800'],
	variable: '--font-hanken-grotesk',
})

export const metadata = {
	title: 'Results Summary Component',
	description:
		'FrontEnd Mentor Challenge | Results Summary Component | Built using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${hanken_grotesk.variable} font-sans`}>
				{children}
			</body>
		</html>
	)
}
