import React from "react";
import president from "@/public/president.png";
import Image from "next/image";
const Hero = () => {
	return (
		<section className='bg-gray-50 md:px-16 px-5'>
			<div className='grid max-w-screen-xl  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12  h-screen'>
				<div className='hidden  lg:col-span-5 lg:flex'>
					<Image src={president.src} alt='President' width={300} height={500} />
				</div>
				<div className='mr-auto place-self-center lg:col-span-7'>
					<h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-green-700'>
						Presidential Initiative
					</h1>
					<h1 className='max-w-2xl mb-4 text-lg font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl text-green-500'>
						for Artificial Intelligence & Computing
					</h1>
					<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-justify'>
						The mission of PIAIC is to reshape Pakistan by revolutionizing
						education, research, and business by adopting latest, cutting-edge
						technologies. Experts are calling this the 4th industrial
						revolution. We want Pakistan to become a global hub for AI, data
						science, cloud native computing, edge computing, blockchain,
						augmented reality, and internet of things.
					</p>
					<a
						href='https://portal.piaic.org'
						target='_blank'
						className='font-semibold leading-6 inline-flex items-center justify-center px-5 py-3 mr-3 text-base  text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900'>
						Apply Now
						{/* <svg
							className='w-5 h-5 ml-2 -mr-1'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill-rule='evenodd'
								d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
								clip-rule='evenodd'></path>
						</svg> */}
					</a>
					{/* <a
						href='#'
						className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
						Speak to Sales
					</a> */}
				</div>
				{/* <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
					<img src={president.src} alt='mockup' />
				</div> */}
			</div>
		</section>
	);
};

export default Hero;
