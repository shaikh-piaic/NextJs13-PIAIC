import { notFound } from "next/navigation";
import { getQuarter } from "../../../Data/data";

interface Props {
	params: {
		courseName: string;
		slug: string;
	};
}

export async function generateStaticParams() {
	const quarter = await getQuarter();
	// console.log(quarter);

	return quarter.map((Q) => ({
		courseName: Q.courseName,
		slug: Q.slug,
	}));
	// return quarter;
}

const CoursePage = async ({ params }: Props) => {
	const [course] = await getQuarter(params.slug, params.courseName);
	if (course) {
		let { title, desc, duration, outline } = course;
		return (
			<>
				<section className='text-black body-font'>
					<div className='container px-5 py-8 mx-auto flex flex-wrap md:px-14 flex-col'>
						<h6 className='text-base  font-medium  mb-2 md:text-base lg:text-base text-center'>
							Quarter {course.slug == "q4" ? "IV" : "V"}
						</h6>
						<div className='flex flex-col md:flex-row justify-between'>
							<h2 className='text-lg  font-medium  mb-2 md:text-xl lg:text-2xl '>
								{title}
							</h2>
							<h3 className='text-lg  font-medium  mb-2 shrink-0 '>
								Duration: {duration}
							</h3>
						</div>
					</div>
				</section>
				<section className='text-black body-font'>
					<div className='container px-5 py-8 mx-auto flex flex-wrap md:px-14 flex-col'>
						<h3 className='text-lg  font-medium  mb-2 underline '>
							Course Description
						</h3>
						<div className='md:w-full '>
							<p className='leading-relaxed text-base text-justify '>{desc}</p>
						</div>
						{/* </div> */}
					</div>
				</section>
				<section className='text-black body-font '>
					<div className='container px-5 py-6 mx-auto flex flex-wrap md:px-14 flex-col'>
						<h3 className='text-lg  font-medium  mb-2 underline '>
							Course Outline
						</h3>
						<div className='md:w-full '>
							<ol className='list-inside'>
								{outline.map((d, i) => {
									return (
										<li
											className='leading-relaxed text-base text-justify list-decimal'
											key={i}>
											{d}
										</li>
									);
								})}
							</ol>
						</div>
						{/* </div> */}
					</div>
				</section>
			</>
		);
	}
	return notFound();
};

export default CoursePage;
