import wit1 from "@/public/wit-1.jpeg";
import wit2 from "@/public/wit-2.jpeg";
import wit3 from "@/public/wit-3.jpeg";
import wit4 from "@/public/wit-4.jpeg";
import wit5 from "@/public/wit-5.jpeg";
import wit6 from "@/public/wit-6.jpeg";
import wit7 from "@/public/wit-7.jpeg";
import wit8 from "@/public/wit-8.jpeg";
import wit9 from "@/public/wit-9.jpeg";
import wit10 from "@/public/wit-10.jpeg";
import wit11 from "@/public/wit-11.jpeg";
import wit12 from "@/public/wit-12.jpeg";
import Image from "next/image";
const WIT = () => {
	return (
		<section id='WITSection' className=' h-auto bg-gray-50 px-5 md:px-16'>
			<div className='max-w-screen-xl mx-auto'>
				<div className='w-full flex flex-col object-center items-center justify-center py-24'>
					<h1 className='text-xl font-semibold mt-6 mb-8 md:text-3xl lg:text-4xl md:text-center text-green-500 uppercase'>
						WOMEN INCLUSION IN TECHNOLOGY
					</h1>
					<div className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
						<div>
							<Image
								className='h-auto max-w-full rounded-lg transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg'
								src={wit1.src}
								alt=''
								width={960}
								height={640}
							/>
						</div>
						<div>
							<Image
								className='h-auto max-w-full rounded-lg transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg'
								src={wit2.src}
								alt=''
								width={960}
								height={640}
							/>
						</div>
						<div>
							<Image
								className='h-auto max-w-full rounded-lg transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg'
								src={wit3.src}
								alt=''
								width={960}
								height={640}
							/>
						</div>
						<div>
							<Image
								className='h-auto max-w-full rounded-lg transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg'
								src={wit4.src}
								alt=''
								width={960}
								height={640}
							/>
						</div>
						<div>
							<Image
								className='h-auto max-w-full rounded-lg transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg'
								src={wit5.src}
								alt=''
								width={960}
								height={640}
							/>
						</div>
						<div>
							<Image
								className='h-auto max-w-full rounded-lg transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg'
								src={wit6.src}
								alt=''
								width={960}
								height={640}
							/>
						</div>
						<div>
							<Image
								className='h-auto max-w-full rounded-lg transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg'
								src={wit7.src}
								alt=''
								width={960}
								height={640}
							/>
						</div>
						<div>
							<Image
								className='h-auto max-w-full rounded-lg transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg'
								src={wit8.src}
								alt=''
								width={960}
								height={640}
							/>
						</div>
						<div>
							<Image
								className='h-auto max-w-full rounded-lg transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg'
								src={wit9.src}
								alt=''
								width={960}
								height={640}
							/>
						</div>
						<div>
							<Image
								className='h-auto max-w-full rounded-lg transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg'
								src={wit10.src}
								alt=''
								width={960}
								height={640}
							/>
						</div>
						<div>
							<Image
								className='h-auto max-w-full rounded-lg transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg'
								src={wit11.src}
								alt=''
								width={960}
								height={640}
							/>
						</div>
						<div>
							<Image
								className='h-auto max-w-full rounded-lg transform lg:transition lg:duration-500 lg:hover:scale-105 shadow lg:hover:shadow-lg'
								src={wit12.src}
								alt=''
								width={960}
								height={640}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WIT;
