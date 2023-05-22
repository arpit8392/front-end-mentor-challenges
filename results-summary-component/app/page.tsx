import Results from './Results'
import Summary from './Summary'

export default function Home() {
	return (
		<main className='md:grid md:min-h-screen md:place-content-center md:bg-blue-50'>
			<div className='grid grid-cols-1 md:max-w-xl md:grid-cols-2 md:rounded-3xl md:bg-white md:shadow-lg '>
				<Results />
				<Summary />
			</div>
		</main>
	)
}
