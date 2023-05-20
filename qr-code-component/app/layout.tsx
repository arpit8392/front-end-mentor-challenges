import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-outfit',
})

export const metadata = {
	title: 'QR Code Component',
	description:
		'QR Code Component Component using Tailwind CSS | Frontend Mentor Challenge',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${outfit.variable} font-sans`}>{children}</body>
		</html>
	)
}
