import { getCourses } from "../../Data/data";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	const courses = await getCourses();

	return courses.map((course) => ({
		slug: course.slug,
	}));
}

const Page = async ({ params }: Props) => {
	const [course] = await getCourses(params.slug);

	if (course) {
		let { courseName, desc, slug } = course;
		let { Q4, Q5 } = course;
		return (
			<>
				{/* Header */}
				<section className='text-white/90 body-font bg-emerald-700 '>
					<div className='container mx-auto px-5 py-16 md:px-14 md:py-28 lg:py-28'>
						<div className='lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-justify'>
							<h1 className=' md:text-4xl lg:text-5xl text-2xl mb-4 font-semibold text-white/90 text-justify'>
								{courseName}
								{/* <br className='hidden lg:inline-block' /> */}
							</h1>
							<p className='leading-relaxed '>{desc}</p>
						</div>
					</div>
				</section>
				{/* Core */}
				<section className='text-black body-font'>
					<div className='container px-5 py-24 mx-auto md:px-14'>
						<h2 className='text-xl  font-medium  mb-10 md:text-3xl lg:text-4xl text-center'>
							Program Structure
						</h2>
						{/* <div className='md:w-full mb-10 '>
							<p className='leading-relaxed text-base md:text-xl lg:2xl text-center'>
								A five-quarter specialized program
							</p>
						</div> */}
						<div className='flex flex-wrap -m-4'>
							<div className='p-4 lg:w-1/3 h-96'>
								<div className='h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center '>
									<h2 className='tracking-widest text-xs  font-medium text-black mb-1'>
										CORE
									</h2>
									<h1 className=' sm:text-2xl text-xl font-semibold  mb-3'>
										QUARTER I
									</h1>
									<h2 className=' sm:text-xl text-lg font-medium  mb-3  md:hover:text-green-600 md:hover:underline'>
										<Link href='/core/q1'>
											Object-Oriented Programming using TypeScript
										</Link>
									</h2>

									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4 '>
										We will start the program by learning the fundamentals of
										Object-Oriented programming using JavaScript and TypeScript.
										We will also understand the latest Web trends i.e. Web 3.0
										and Metaverse concepts and try to understand their working
										from the perspective of the users.
									</p>
								</div>
							</div>
							<div className='p-4 lg:w-1/3 h-96'>
								<div className='h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center '>
									<h2 className='tracking-widest text-xs  font-medium text-black mb-1'>
										CORE
									</h2>
									<h1 className=' sm:text-2xl text-xl font-semibold  mb-3'>
										QUARTER II
									</h1>
									<h2 className=' sm:text-xl text-lg font-medium  mb-3  md:hover:text-green-600 md:hover:underline'>
										<Link href='/core/q2'>
											Developing Planet-Scale Web 2.0 Apps using Next.js 13
										</Link>
									</h2>

									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4 '>
										The objective of this course is to teach participants to
										develop customer-facing planet-scale Websites, Full-Stack
										Apps and templates, Dashboards, and Muti-Cloud Serverless
										APIs. By the end of the quarter, the participants will be
										able to develop and deploy web platforms like Facebook,
										Shopify, etc. The technologies covered in this course will
										include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC,
										QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL
										Compatible), AWS Serverless Technologies, and Cloud
										Development Kit for Terraform (CDKTF).
									</p>
								</div>
							</div>
							<div className='p-4 lg:w-1/3 h-96'>
								<div className='h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center '>
									<h2 className='tracking-widest text-xs  font-medium text-black mb-1'>
										CORE
									</h2>
									<h1 className=' sm:text-2xl text-xl font-semibold  mb-3'>
										QUARTER III
									</h1>
									<h2 className=' sm:text-xl text-lg font-medium  mb-3  md:hover:text-green-600 md:hover:underline'>
										<Link href='/core/q3'>
											Dollar Making Bootcamp - Full-Stack Template
										</Link>
									</h2>

									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4 '>
										In this course, you will be tasked with building APIs and a
										template to be sold on the Panaverse DAO Marketplace and
										Theme Forest. The Panaverse DAO will receive 25% of the sale
										for platform management and an additional 15% for marketing
										purposes. 60% of the revenues will be distributed to the
										developer as Panaverse tokens.
									</p>
								</div>
							</div>
						</div>
						<div className='flex flex-wrap -m-4 justify-center'>
							<div className='p-4 lg:w-1/3 h-96'>
								<div className='h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center '>
									<h2 className='tracking-widest text-xs  font-medium text-black mb-1'>
										SPECIALIZED
									</h2>
									<h1 className=' sm:text-2xl text-xl font-semibold  mb-3'>
										QUARTER IV
									</h1>
									<h2 className=' sm:text-xl text-lg font-medium  mb-3 text-ellipsis line-clamp-1  md:hover:text-green-600 md:hover:underline'>
										<Link href={`/course/${slug}/q4`}>{Q4.title}</Link>
									</h2>
									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4 '>
										{Q4.desc}
									</p>
								</div>
							</div>
							<div className='p-4 lg:w-1/3 h-96'>
								<div className='h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center '>
									<h2 className='tracking-widest text-xs  font-medium text-black mb-1'>
										SPECIALIZED
									</h2>
									<h1 className=' sm:text-2xl text-xl font-semibold  mb-3'>
										QUARTER V
									</h1>
									<h2 className=' sm:text-xl text-lg font-medium  mb-3 text-ellipsis line-clamp-1  md:hover:text-green-600 md:hover:underline'>
										<Link href={`/course/${slug}/q5`}>{Q5.title}</Link>
									</h2>
									<p className='leading-relaxed mb-3 text-ellipsis line-clamp-4 '>
										{Q5.desc}
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
	return notFound();
};

export default Page;
