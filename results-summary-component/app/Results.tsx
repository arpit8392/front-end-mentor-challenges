type Props = {}
const Results = (props: Props) => {
	return (
		<section
			className='primary-gradient flex
		flex-col items-center space-y-6 rounded-b-3xl p-6 text-lightLavender shadow-md md:rounded-3xl '
		>
			<h3 className='font-bold tracking-wide md:text-xl'>Your Result</h3>
			<div className='circle-gradient flex h-28 w-28 items-center justify-center rounded-full text-sm md:h-40 md:w-40'>
				<p className='text-center text-lightLavender/40'>
					<span className='block text-5xl font-extrabold text-white md:text-6xl'>
						76
					</span>
					of 100
				</p>
			</div>
			<div className='max-w-xs flex-col space-y-1 px-2 pb-2 text-center'>
				<h2 className='text-2xl font-bold tracking-wide text-white md:text-3xl'>
					Great
				</h2>
				<p className='max-w-prose text-sm'>
					Your performance exceed 65% of the people conducting the
					test here!
				</p>
			</div>
		</section>
	)
}
export default Results
