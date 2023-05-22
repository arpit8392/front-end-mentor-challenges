import Image from 'next/image'

type Props = {
	icon: string
	score: number
	category: string
	color: string
}

type colors = {
	lightRed: string
	orangeYellow: string
	greenTeal: string
	cobaltBlue: string
}

const colorPallette: colors = {
	lightRed: 'bg-lightRed/5 text-lightRed',
	orangeYellow: 'bg-orangeYellow/5 text-orangeYellow',
	greenTeal: 'bg-greenTeal/5 text-greenTeal',
	cobaltBlue: 'bg-cobaltBlue/5 text-cobaltBlue',
}

const SummaryItem = ({ icon, score, category, color }: Props) => {
	return (
		<div
			className={`flex justify-between rounded-md p-4 text-sm ${
				colorPallette[color as keyof colors]
			}`}
		>
			<div className='relative flex space-x-3'>
				<Image
					src={icon}
					alt={`${category} Icon`}
					width={16}
					height={16}
				/>

				<p className='tracking-wide'>{category}</p>
			</div>
			<p className='text-darkGrayBlue/50'>
				<span className='text-darkGrayBlue'>{score} </span> / 100
			</p>
		</div>
	)
}
export default SummaryItem
