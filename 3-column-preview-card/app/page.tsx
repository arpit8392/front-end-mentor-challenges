import data from '../data'
import Card from './Card'

export default function Home() {
	return (
		<main className='grid min-h-screen bg-slate-50 md:place-content-center'>
			<div className='grid grid-cols-1 md:max-w-4xl md:grid-cols-3 md:drop-shadow-2xl md:overflow-hidden md:rounded-lg'>
				{data.map((item) => {
					return <Card key={item.id} {...item} />
				})}
			</div>
		</main>
	)
}
