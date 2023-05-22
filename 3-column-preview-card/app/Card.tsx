import Image from 'next/image'
import Link from 'next/link'

type Props = {
	id: number
	title: string
	description: string
}

const bgStyles: string[] = ['bg-orange-650', 'bg-cyan-650', 'bg-cyan-850']

const textStyles: string[] = [
	'text-orange-650',
	'text-cyan-650',
	'text-cyan-850',
]

const Card = ({ id, title, description }: Props) => {
	return (
		<div
			className={`${
				bgStyles[id - 1]
			} flex flex-col justify-between space-y-6 p-12 `}
		>
			<Image
				src={`/images/icon-${title.toLowerCase()}.svg`}
				alt={`Image for ${title} Category`}
				width={64}
				height={40}
				className='pb-4'
			/>
			<h1 className='font-big-shoulders-display text-4xl uppercase text-slate-50'>
				{title}
			</h1>
			<p className='max-w-prose max-w-xs pb-1 font-lexend-deca text-sm font-light leading-6 text-white/75 mix-blend-lighten md:pb-10'>
				{description}
			</p>
			<Link
				href='#'
				className={`${
					textStyles[id - 1]
				} max-w-fit rounded-3xl bg-slate-50 px-8 py-3 font-lexend-deca hover:bg-inherit hover:text-slate-50 hover:ring-2 hover:ring-slate-50`}
			>
				Learn More
			</Link>
		</div>
	)
}
export default Card
