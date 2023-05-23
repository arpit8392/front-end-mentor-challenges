import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Card = () => {
	return (
		<article className='grid max-w-sm overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl md:grid-cols-2'>
			<figure>
				{/* <img
					src='/images/image-product-desktop.jpg'
					alt='Product Image'
					className='hidden md:block'
				/>
				<img
					src='/images/image-product-mobile.jpg'
					alt='Product Image'
					className='md:hidden'
				/> */}
				<Image
					src={'/images/image-product-desktop.jpg'}
					height={450}
					width={300}
					alt='Product Image'
					className='hidden h-full w-full object-contain md:block'
				/>
				<Image
					src={'/images/image-product-mobile.jpg'}
					height={240}
					width={340}
					alt='Product Image'
					className='block h-full w-full object-contain md:hidden'
				/>
			</figure>

			<section className='flex flex-col justify-between space-y-5 p-6 font-montserrat md:py-10'>
				<p className='text-xs uppercase tracking-[5px] text-aurometal '>
					Perfume
				</p>
				<h1 className='font-fraunces text-3xl text-gunmetal'>
					Gabrielle Essence Eau De Parfum
				</h1>
				<p className='max-w-xs text-sm leading-6 text-aurometal'>
					A floral, solar and voluptuous interpretation composed by Olivier
					Polge, Perfumer-Creator for the House of CHANEL.
				</p>
				<div className='flex items-center space-x-5'>
					<p className='font-fraunces text-3xl text-aquamarine'>$149.99</p>
					<p className='text-sm tracking-wide text-aurometal line-through'>
						$169.99
					</p>
				</div>
				<button className='flex w-full items-center justify-center space-x-2 rounded-lg bg-aquamarine px-2 py-4 font-bold text-white hover:bg-deepAquamarine active:bg-deepAquamarine'>
					{' '}
					<ShoppingCartIcon className='h-6 w-6' />
					<span>Add to Cart</span>
				</button>
			</section>
		</article>
	)
}
export default Card
