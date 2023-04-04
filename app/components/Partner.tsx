import Image from "next/image";
import panacloud from "@/public/panacloud.webp";
import saylani from "@/public/saylani.webp";
const Partner = () => {
	return (
		<section className='text-black body-font  bg-gray-100 h-auto px-5 md:px-16'>
			<div className='container px-5 py-8 mx-auto md:px-16 w-full flex flex-col text-center items-center'>
				<h1 className='text-xl lg:text-4xl font-semibold my-10 mt-20 text-green-500 uppercase'>
					Strategic Partners
				</h1>
				<div className='flex flex-col md:flex-row  md:space-x-12 lg:justify-center items-center'>
					<Image src={panacloud.src} alt='PanaCloud' width={200} height={200} />
					<Image
						src={saylani.src}
						alt='Saylani Welfare Trust'
						width={200}
						height={200}
					/>
				</div>
			</div>
		</section>
	);
};

export default Partner;
