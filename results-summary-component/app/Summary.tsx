import SummaryItem from './SummaryItem'
import data from '../data'

type Props = {}

const colors: string[] = ['lightRed', 'orangeYellow', 'greenTeal', 'cobaltBlue']

const Summary = (props: Props) => {
	return (
		<section className='flex flex-col space-y-6 px-8 py-6 text-darkGrayBlue'>
			<h1 className='text-bold text-lg '>Summary</h1>
			<div className='space-y-3'>
				{data.map((item, i) => (
					<SummaryItem key={i} {...item} color={colors[i]} />
				))}
			</div>
			<button className='mx-auto my-1 min-w-full rounded-[128px] bg-darkGrayBlue  py-3 text-sm tracking-wider text-white hover:cursor-pointer hover:bg-gradient-to-b hover:from-lightSlateBlue hover:to-lightRoyalBlue md:my-2'>
				Continue
			</button>
		</section>
	)
}
export default Summary
