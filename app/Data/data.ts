interface Courses {
	slug: string;
	courseName: string;
	desc: string;
	Q4: {
		title: string;
		desc: string;
	};
	Q5: {
		title: string;
		desc: string;
	};
}
interface Core {
	slug: string;
	title: string;
	duration: string;
	desc: string;
	outline: string[];
}
[];
interface Specialization {
	courseName: string;
	slug: string;
	title: string;
	duration: string;
	desc: string;
	outline: string[];
}
export const courses: Courses[] = [
	{
		slug: "ai", // ai,iot, bcc,cnc,gab,npa
		courseName: "Artificial Intelligence and Deep Learning",
		desc: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
		Q4: {
			title: "Developing Planet-Scale Intelligent APIs and Python Programming",
			desc: "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology. We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI's powerful models and Next.js 13. We'll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We'll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.",
		},
		Q5: {
			title: "Deep Learning and MLOps",
			desc: "This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.",
		},
	},
	{
		slug: "iot", // ai,iot, bcc,cnc,gab,npa
		courseName: "Ambient Computing and IoT",
		desc: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
		Q4: {
			title: "Ambient Computing with Voice Assistants and Matter Devices",
			desc: "Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn't matter what device you're using, what context you're in, whether you're talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more. If you were thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected. Matter, the next-generation smart home standard, solves many smart home pain points while bringing all our IoT devices together. Some of the biggest tech companies are working together to make Matter a unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and Samsung SmartThings will support the Matter standard by default for all new devices. In this course we will learn to build smart homes with Amazon Alexa and Matter protocol.",
		},
		Q5: {
			title: "Embedded Programming using C and Rust",
			desc: "This is an introductory course about using the C and Rust Programming Languages on “Bare Metal“ embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced, thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers, playing with GPIOs, and making things that work in no time.",
		},
	},
	{
		slug: "bcc", // ai,iot, bcc,cnc,gab,npa
		courseName: "Web 3.0 (Blockchain) and Metaverse",
		desc: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
		Q4: {
			title: "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
			desc: "In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.",
		},
		Q5: {
			title:
				"Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
			desc: "The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.",
		},
	},
	{
		slug: "cnc", // ai,iot, bcc,cnc,gab,npa
		courseName: "Cloud-Native Computing",
		desc: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
		Q4: {
			title: "Certified Kubernetes Application Developer (CKAD)",
			desc: "Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach. These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.",
		},
		Q5: {
			title: "Developing Multi-Cloud Apps using CDK for Terraform",
			desc: "Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures. Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.",
		},
	},
	{
		slug: "gab", // ai,iot, bcc,cnc,gab,npa
		courseName: "Genomics and Bioinformatics",
		desc: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
		Q4: {
			title: "Python for Biologists",
			desc: "This course will focus on learning the basics of the Python programming language through genomics examples.",
		},
		Q5: {
			title: "Bioinformatics with Python",
			desc: "In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data",
		},
	},
	{
		slug: "npa", // ai,iot, bcc,cnc,gab,npa
		courseName: "Network Programmability and Automation",
		desc: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
		Q4: {
			title: "CCNA 200-301 Certification",
			desc: "This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.",
		},
		Q5: {
			title: "Network Programmability and Automation",
			desc: "Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.            ",
		},
	},
];

export const Core: Core[] = [
	{
		slug: "q1",
		title: "CS-101: Object-Oriented Programming using TypeScript",
		duration: "13 Weeks",
		desc: "We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.",
		outline: [
			"HTML and CSS (Homework)",
			"Web 3.0 and Metaverse Theory",
			"Fundamentals of Typescript",
			"Object-Oriented Programming with TypeScript",
			"TypeScript for React",
		],
	},
	{
		slug: "q2",
		title:
			"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
		duration: "13 Weeks",
		desc: "The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).",
		outline: [
			"Next.js 13 Web Development",
			"Next.js 13 using Chakra UI (Remote Zoom Class)",
			"UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom Class)",
			"API Routes with Next.js (Remote Zoom Class)",
			"APIs with Next.js and tRPC (Remote Zoom Class)",
			"SQL and Prisma",
			"Next.js 13 using TailwindCSS (Remote Zoom Class)",
			"AWS Application Composer (Remote Zoom Class)",
			"Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)",
		],
	},
	{
		slug: "q3",
		title:
			"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
		duration: "13 Weeks",
		desc: "In this course, you will be tasked with building APIs and a template to be sold on the Panaverse DAO Marketplace and Theme Forest. The Panaverse DAO will receive 25% of the sale for platform management and an additional 15% for marketing purposes. 60% of the revenues will be distributed to the developer as Panaverse tokens.",
		outline: [
			"Build Full-Stack Next.js 13 Jamstack Templates",
			"Build QraphQL APIs ",
		],
	},
];

export const specialization: Specialization[] = [
	{
		courseName: "ai",
		slug: "q4",
		title:
			"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
		duration: "13 Weeks",
		desc: "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology. We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI's powerful models and Next.js 13. We'll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We'll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.",
		outline: [
			"Introduction to Machine Learning, Data Science, and AI",
			"Building Next-Gen Intelligent Apps with OpenAI's Powerful Models We will cover GPT-4, ChatGPT, etc. and Next.js 13",
			"Python Crash Course for TypeScript Developers",
		],
	},
	{
		courseName: "ai",
		slug: "q5",
		title: "AI-361: Deep Learning and MLOps",
		duration: "13 Weeks",
		desc: "This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.",
		outline: [
			"Deep Learning with Tensorflow",
			"Machine Learning Engineering for Production (MLOps) using Terraform for CDK",
			"Fundamentals of Typescript",
			"Object-Oriented Programming with TypeScript",
			"TypeScript for React",
		],
	},
	{
		courseName: "iot",
		slug: "q4",
		title: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
		duration: "13 Weeks",
		desc: "Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn't matter what device you're using, what context you're in, whether you're talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more. If you were thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected. Matter, the next-generation smart home standard, solves many smart home pain points while bringing all our IoT devices together. Some of the biggest tech companies are working together to make Matter a unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and Samsung SmartThings will support the Matter standard by default for all new devices. In this course we will learn to build smart homes with Amazon Alexa and Matter protocol.",
		outline: ["Alexa Skill Developement", "Alexa with Matter Protocol"],
	},
	{
		courseName: "iot",
		slug: "q5",
		title: "AC-361: Embedded Programming using C and Rust",
		duration: "13 Weeks",
		desc: "This is an introductory course about using the C and Rust Programming Languages on “Bare Metal“ embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced, thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers, playing with GPIOs, and making things that work in no time.",
		outline: [
			"Introduction to the Internet of Things and Embedded Systems",
			"Introduction to C",
			"C Programming",
			"Introduction to Embedded systems",
			"Embedded Programming using Rust",
		],
	},
	{
		courseName: "bcc",
		slug: "q4",
		title: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
		duration: "13 Weeks",
		desc: "In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.",
		outline: [
			"Blockchain and Metaverse Theory",
			"Smart Contract Development in Solidity",
			"Dapp Development using Ethers.js and Next.js 13",
			"Tokennomics",
			"Blockchain Project: Create a Token and Launch ICO/IEO/IDO",
		],
	},
	{
		courseName: "bcc",
		slug: "q5",
		title:
			"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
		duration: "13 Weeks",
		desc: "The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.",
		outline: [
			"Open Metaverse Web Development",
			"Blender 3D asset Creation for the Metaverse (Remote Zoom Class)",
		],
	},
	{
		courseName: "cnc",
		slug: "q4",
		title: "CN-351: Certified Kubernetes Application Developer (CKAD)",
		duration: "13 Weeks",
		desc: "Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach. These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.",
		outline: ["Kubernetes", "Cloud Development Kit for Kubernetes"],
	},
	{
		courseName: "cnc",
		slug: "q5",
		title: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
		duration: "13 Weeks",
		desc: "Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures. Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.",
		outline: ["CDK for Terraform"],
	},
	{
		courseName: "gab",
		slug: "q4",
		title: "Bio-351: Python for Biologists",
		duration: "13 Weeks",
		desc: "This course will focus on learning the basics of the Python programming language through genomics examples.",
		outline: ["To Be Announced Soon"],
	},
	{
		courseName: "gab",
		slug: "q5",
		title: "Bio-361: Bioinformatics with Python",
		duration: "13 Weeks",
		desc: "In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.",
		outline: ["To Be Announced Soon"],
	},
	{
		courseName: "npa",
		slug: "q4",
		title: "NPA-351: CCNA 200-301 Certification",
		duration: "13 Weeks",
		desc: "This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.",
		outline: ["To Be Announced Soon"],
	},
	{
		courseName: "npa",
		slug: "q5",
		title: "NPA-361: Network Programmability and Automation",
		duration: "13 Weeks",
		desc: "Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.",
		outline: ["To Be Announced Soon"],
	},
];
export async function getCourses(slug?: string): Promise<Array<Courses>> {
	return new Promise((resolve) => {
		setTimeout(() => {
			if (slug) {
				const course = courses.filter((c) => c.slug === slug);
				resolve(course);
			} else {
				resolve(courses);
			}
		}, 1000);
	});
}
export async function getQuarter(
	slug?: string,
	courseName?: string
): Promise<Array<Specialization>> {
	return new Promise((resolve) => {
		setTimeout(() => {
			if (slug && courseName) {
				const course = specialization.filter(
					(c) => c.slug === slug && c.courseName === courseName
				);
				resolve(course);
			} else {
				resolve(specialization);
			}
		}, 1000);
	});
}

export async function getCoreCourses(slug?: string): Promise<Array<Core>> {
	return new Promise((resolve) => {
		setTimeout(() => {
			if (slug) {
				const coreCourses = Core.filter((c) => c.slug === slug);
				resolve(coreCourses);
			} else {
				resolve(Core);
			}
		}, 1000);
	});
}
