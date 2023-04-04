import Image from "next/image";
import Link from "next/link";
import React from "react";
import ai from "@/public/ai.jpg";

const Course = () => {
	return (
		<section className='text-black body-font'>
			<div className='container px-5 py-5 mx-auto md:px-16'>
				<h2 className='text-xl  font-medium mt-6 mb-8 md:text-3xl lg:text-4xl text-center md:text-center'>
					Available Courses
				</h2>
				<div className='md:w-4/5 mb-10 mx-auto '>
					<p className='leading-relaxed text-base text-center md:text-xl lg:2xl md:text-center'>
						In this brand-new type of curriculum, students will learn how to
						make money and boost exports in the classroom and will begin doing
						so within six months of the program beginning. It resembles a cross
						between a corporate venture and an educational project.
					</p>
				</div>
				<div className='flex flex-wrap -m-4 justify-evenly'>
					<div className='p-4 lg:w-1/3 md:w-2/4'>
						<div className=' h-full border rounded-2xl text-white overflow-hidden'>
							<h2 className='text-2xl p-3 uppercase tracking-[3px] text-black text-center mt-4'>
								Artificial Intelligence & Deep Learning
							</h2>
							{/* <p className='p-3 text-left text-gray-700 leading-relaxed mb-3 '>
								This specialization focuses on building and deploying
								intelligent APIs using OpenAI models and building custom Deep
								Learning Tensorflow models.
							</p> */}

							<Image
								src={ai.src}
								className='lg:h-fit md:h-36 w-fit object-cover object-center'
								width={700}
								height={400}
								alt=''
							/>
						</div>
					</div>
					<div className='p-4 lg:w-1/3 md:w-2/4'>
						<div className=' h-full border rounded-2xl text-white overflow-hidden'>
							<h2 className='text-2xl p-3 uppercase tracking-[3px] text-black text-center mt-4'>
								Ambient Computing and IoT
							</h2>
							<p className='p-3 text-left text-gray-700'>
								This Specialization focuses on building Smart Homes, Offices,
								Factories, and Cities using Voice computing, Matter Protocol,
								and Embedded Devices.
							</p>
						</div>
					</div>
					<div className='p-4 lg:w-1/3 md:w-2/4'>
						<div className=' h-full border rounded-2xl text-white overflow-hidden'>
							<h2 className='text-2xl p-3 uppercase tracking-[3px] text-black text-center mt-4'>
								Cloud-Native Computing
							</h2>
							<p className='p-3 text-left text-gray-700'>
								This Specialization focuses on Containers, Kubernetes, and CDK
								for Kubernetes.
							</p>
						</div>
					</div>
					<div className='p-4 lg:w-1/3 md:w-2/4'>
						<div className=' h-full border rounded-2xl text-white overflow-hidden'>
							<h2 className='text-2xl p-3 uppercase tracking-[3px] text-black text-center mt-4'>
								Web 3.0 (Blockchain) and Metaverse
							</h2>
							<p className='p-3 text-left text-gray-700'>
								This specialization focuses on developing full-stack Web 3.0 and
								Metaverse experiences for the next generation of the internet by
								specializing in building worlds that merge the best of
								cutting-edge decentralized distributed blockchains with 3D
								metaverse client experiences.
							</p>
						</div>
					</div>
					<div className='p-4 lg:w-1/3 md:w-2/4'>
						<div className=' h-full border rounded-2xl text-white overflow-hidden'>
							<h2 className='text-2xl p-3 uppercase tracking-[3px] text-black text-center mt-4'>
								Genomics and Bioinformatics
							</h2>
							<p className='p-3 text-left text-gray-700'>
								Genomics is the study of the total genetic makeup of individual
								organisms, and how this genetic information is structured,
								functions, and has evolved; bioinformatics encompasses a diverse
								range of analytical methods and tools applied to genomic data.
								This Specialization focuses on performing complex bioinformatics
								analysis using the most essential Python libraries and
								applications.
							</p>
						</div>
					</div>
					<div className='p-4 lg:w-1/3 md:w-2/4'>
						<div className=' h-full border rounded-2xl text-white overflow-hidden'>
							<h2 className='text-2xl p-3 uppercase tracking-[3px] text-black text-center mt-4'>
								Network Programmability and Automation
							</h2>
							<p className='p-3 text-left text-gray-700'>
								More than ever, network engineers are finding it challenging to
								complete their duties entirely manually. Network automation is
								now crucial due to new protocols, technologies, delivery models,
								and the requirement for enterprises to become more adaptable and
								agile. This course teaches network engineers how to automate
								systems with code using a variety of technologies and tools,
								including Linux, Python, APIs, and Git.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Course;
