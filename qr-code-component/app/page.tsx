export default function Home() {
	return (
		<main className='grid min-h-screen place-content-center bg-lightGrey'>
			<div className='max-w-xs flex-col rounded-3xl bg-white p-5 text-center'>
				<img
					className='h-auto rounded-lg'
					src='/assets/images/image-qr-code.png'
					alt='QR Code Image'
				/>
				<div className=' flex-col space-y-4 p-4'>
					<h1 className='text-xl font-bold text-darkNavy'>
						Improve your front-end skills by building projects
					</h1>
					<p className='text-sm text-grey'>
						Scan the QR code to visit Frontend Mentor and take your
						coding skills to the next level
					</p>
				</div>
			</div>
		</main>
	)
}
