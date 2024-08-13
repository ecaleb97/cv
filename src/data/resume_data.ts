import { Github } from "@/components/icons/github";
import { LinkedIn } from "@/components/icons/linkedin";

export const RESUME_DATA = {
	name: "Caleb Zamalloa",
	initials: "CZ",
	location: "Madrid, Spain",
	about: `Fullstack Developer focused in create
  amazing UX/UI experiences`,
	summary: `Fullstack developer. I use the most recent and
  advanced technologies to improve use experience, accesibility
  and maximize web app performance.`,
	avatar: "/assets/me.webp",
	portfolioInfo: {
		name: "Portfolio",
		url: "https://ecaleb.dev",
	},
	contact: {
		link: {
			name: "Other links",
			url: "https://link.ecaleb.dev",
		},
		email: {
			name: "Email",
			at: "ecaleb.vz@gmail.com",
		},
		social: [
			{
				name: "Github",
				url: "https://github.com/ecaleb97",
				icon: Github,
			},
			{
				name: "Linkedin",
				url: "https://linkedin.com/in/caleb-villanueva-zamalloa",
				icon: LinkedIn,
			},
		],
	},
	education: [
		{
			school: "Universidad Politécnica de Madrid",
			degree: "Telematics Engineering",
			from: "2017",
			to: "2020",
		},
		{
			school: "42 Madrid",
			degree: "Software Engineering",
			from: "2023",
			to: "Present",
		},
	],
	work: [
		{
			company: "Freelance",
			position: "Fullstack Developer",
			from: "2023",
			to: "Present",
			description:
				"Developing web applications, landing pages and websites for clients.",
		},
		{
			company: "Indra Sistemas (Minsait)",
			position: "Mobile Device Management",
			from: "2022",
			to: "2023",
			description: `Spearheading the development and maintenance of cutting-edge 
			Mobile Device Management (MDM) solutions, catering to diverse client needs.`,
		},
		{
			company: "K-tuin Sistemas Informáticos",
			position: "Frontend Developer",
			from: "2020",
			to: "2022",
			description:
				"Developing new intranet interface and maintaining legacy code.",
		},
		{
			company: "Freelance",
			position: "Private Math Tutor",
			from: "2017",
			to: "Present",
			description: `Providing personalized and comprehensive math tutoring services to students across various levels, 
				adapting to individual learning styles for optimal results.`,
		},
	],
	projects: [
		{
			title: "Recetas AI",
			techStack: [
				"TypeScript",
				"React",
				"Next.js",
				"Tailwind CSS",
				"shadcn/ui",
			],
			description: "Recipe search engine using AI",
			link: {
				href: "https://recetas.ecaleb.dev",
			},
		},
		{
			title: "We Grow",
			techStack: [
				"TypeScript",
				"Next.js",
				"Tailwind CSS",
				"React",
				"shadcn/ui",
			],
			description: "Hack4good Telefonica 2024 winner project",
			link: {
				href: "",
			},
		},
		{
			title: "AI Chatbot",
			techStack: [
				"TypeScript",
				"Next.js",
				"Tailwind CSS",
				"React",
				"shadcn/ui",
			],
			description: "SAAS chatbot using AI",
			link: {
				href: "",
			},
		},
		{
			title: "Auth Template",
			techStack: [
				"TypeScript",
				"Next.js",
				"Tailwind CSS",
				"React",
				"shadcn/ui",
			],
			description: "Authentication template for Next.js project",
			link: {
				href: "",
			},
		},
		{
			title: "Libft",
			techStack: ["C", "Makefile"],
			description: "My own library of functions in C",
			link: {
				href: "https://github.com/ecaleb97/libft",
			},
		},
	],
};
