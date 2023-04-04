import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import Program from "./components/Program";
import WIT from "./components/WIT";
import Partner from "./components/Partner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Hero />
			<Program />
			<WIT />
			<Partner />
		</>
	);
}
