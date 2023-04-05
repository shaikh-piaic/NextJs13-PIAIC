"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/public/piaic_logo.svg";
import Image from "next/image";

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className='bg-white sticky top-0 z-[999] md:px-16 px-5'>
			<nav
				className='mx-auto flex max-w-7xl items-center justify-between p-2'
				aria-label='Global'>
				<div className='flex lg:flex-1'>
					<a href='/' className='-m-1.5 p-1.5'>
						<span className='sr-only'>PIAIC</span>
						<Image
							className='h-auto w-full'
							src={logo.src}
							alt=''
							width={40}
							height={32}
						/>
					</a>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon className='h-6 w-6' aria-hidden='true' />
					</button>
				</div>
				<div className='hidden lg:flex lg:gap-x-12'>
					<a
						href='/#'
						className='text-md font-semibold leading-6 text-gray-900  hover:text-green-700'>
						Home
					</a>
					{/* <a
						href='#'
						className='text-md font-semibold leading-6 text-gray-900 hover:text-green-700'>
						About
					</a> */}
					<a
						href='/#availableProgram'
						className='text-md font-semibold leading-6 text-gray-900 hover:text-green-700'>
						Available Programs
					</a>
					<a
						href='/#WITSection'
						className='text-md font-semibold leading-6 text-gray-900 hover:text-green-700'>
						WIT
					</a>
				</div>
				<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
					<a
						href='https://portal.piaic.org'
						target='_blank'
						className='text-md font-semibold leading-6 inline-flex items-center justify-center px-5 py-3 mr-3 text-base  text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900'>
						Apply Now
					</a>
				</div>
			</nav>
			<Dialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className='fixed inset-0 z-10' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-2 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
					<div className='flex items-center justify-between'>
						<a href='/' className='-m-1.5 p-1.5'>
							<span className='sr-only'>PIAIC</span>
							<Image
								className='h-auto w-full'
								src={logo.src}
								alt=''
								width={40}
								height={32}
							/>
						</a>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-700'
							onClick={() => setMobileMenuOpen(false)}>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon className='h-6 w-6' aria-hidden='true' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6 px-5'>
								<a
									href='/#'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
									Home
								</a>
								{/* <a
									href='#'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
									About
								</a> */}
								<a
									href='/#availableProgram'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
									Available Programs
								</a>
								<a
									href='/#WITSection'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
									WIT
								</a>
							</div>
							<div className='py-6 px-5'>
								<a
									href='https://portal.piaic.org'
									target='_blank'
									className=' font-semibold leading-6 inline-flex items-center justify-center px-5 py-3 mr-3 text-base  text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900'
									onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
									Apply Now
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
