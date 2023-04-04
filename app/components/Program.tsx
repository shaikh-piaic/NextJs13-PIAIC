import Image from "next/image";
import Link from "next/link";
import React from "react";
import ai from "@/public/ai.jpg";
import iot from "@/public/iot.jpg";
import bcc from "@/public/bcc.jpg";
import cnc from "@/public/cnc.jpg";
import gab from "@/public/gab.jpg";
import npa from "@/public/npa.jpg";

const Program = () => {
	return (
		<section
			id='availableProgram'
			className='text-black body-font  bg-gray-100 h-auto px-5 md:px-16'>
			<div className='container  py-24 mx-auto max-w-screen-xl '>
				<h2 className='text-xl  font-semibold mt-6 mb-8 md:text-3xl lg:text-4xl  md:text-center text-green-500 uppercase'>
					Available Programs
				</h2>
				{/* <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-12 xl:gap-y-10 xl:gap-x-8 gap-y-14 lg:grid-cols-3'> */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3'>
					<Link href={"/courses/ai"}>
						<div className='flex flex-col items-center relative justify-center bg-white px-2 py-6  group overflow-hidden rounded-2xl transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg cursor-pointer mx-0'>
							<div className='relative w-72 h-48 md:w-64 lg:w-56 lg:h-40 xl:w-80 xl:h-52'>
								<Image
									src={ai.src}
									alt=''
									className='rounded-xl w-full h-full object-cover'
									width={700}
									height={400}
								/>
							</div>
							<h1 className='text-[#141414] text-lg font-semibold mt-4 text-center'>
								Artificial Intelligence & Deep Learning
							</h1>
						</div>
					</Link>
					{/*  */}
					<Link href={"/courses/iot"}>
						<div className='flex flex-col items-center relative justify-center bg-white px-2 py-6  group overflow-hidden rounded-2xl transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg cursor-pointer  '>
							<div className='relative w-72 h-48 md:w-64 lg:w-56 lg:h-40 xl:w-80 xl:h-52'>
								<Image
									src={iot.src}
									alt=''
									className='rounded-xl w-full h-full object-cover'
									width={700}
									height={400}
								/>
							</div>
							<h1 className='text-[#141414] text-lg font-semibold mt-4 text-center'>
								Ambient Computing & IoT
							</h1>
						</div>
					</Link>
					{/*  */}
					<Link href={"/courses/cnc"}>
						<div className='flex flex-col items-center relative justify-center bg-white px-2 py-6  group overflow-hidden rounded-2xl transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg cursor-pointer  '>
							<div className='relative w-72 h-48 md:w-64 lg:w-56 lg:h-40 xl:w-80 xl:h-52'>
								<Image
									src={cnc.src}
									alt=''
									className='rounded-xl w-full h-full object-cover'
									width={700}
									height={400}
								/>
							</div>
							<h1 className='text-[#141414] text-lg font-semibold mt-4 text-center'>
								Cloud Native Computing
							</h1>
						</div>
					</Link>
					{/*  */}
					<Link href={"/courses/bcc"}>
						<div className='flex flex-col items-center relative justify-center bg-white px-2 py-6  group overflow-hidden rounded-2xl transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg cursor-pointer  '>
							<div className='relative w-72 h-48 md:w-64 lg:w-56 lg:h-40 xl:w-80 xl:h-52'>
								<Image
									src={bcc.src}
									alt=''
									className='rounded-xl w-full h-full object-cover'
									width={700}
									height={400}
								/>
							</div>
							<h1 className='text-[#141414] text-lg font-semibold mt-4 text-center'>
								Web 3.0 (Blockchain) & Metaverse
							</h1>
						</div>
					</Link>
					{/*  */}
					<Link href={"/courses/gab"}>
						<div className='flex flex-col items-center relative justify-center bg-white px-2 py-6  group overflow-hidden rounded-2xl transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg cursor-pointer  '>
							<div className='relative w-72 h-48 md:w-64 lg:w-56 lg:h-40 xl:w-80 xl:h-52'>
								<Image
									src={gab.src}
									alt=''
									className='rounded-xl w-full h-full object-cover'
									width={700}
									height={400}
								/>
							</div>
							<h1 className='text-[#141414] text-lg font-semibold mt-4 text-center'>
								Genomics & Bioinformatics
							</h1>
						</div>
					</Link>
					{/*  */}
					<Link href={"/courses/npa"}>
						<div className='flex flex-col items-center relative justify-center bg-white px-2 py-6  group overflow-hidden rounded-2xl transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg cursor-pointer  '>
							<div className='relative w-72 h-48 md:w-64 lg:w-56 lg:h-40 xl:w-80 xl:h-52'>
								<Image
									src={npa.src}
									alt=''
									className='rounded-xl w-full h-full object-cover'
									width={700}
									height={400}
								/>
							</div>
							<h1 className='text-[#141414] text-lg font-semibold mt-4 text-center'>
								Network Programmability & Automation
							</h1>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Program;
