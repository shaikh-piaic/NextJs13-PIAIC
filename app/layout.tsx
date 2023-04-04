import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
	title: "PIAIC",
	description:
		"The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className='font-[popins]'>
				<Navbar />
				<div className='flex flex-col min-h-screen'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
