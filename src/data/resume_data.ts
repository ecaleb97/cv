import { Github } from "@/components/icons/github";
import { LinkedIn } from "@/components/icons/linkedin";

export const RESUME_DATA = {
	name: "Caleb Zamalloa",
	initials: "CZ",
	location: "Madrid, Spain",
	about: `Fullstack Developer +4 years of experience.`,
	summary: `+4 years of experience in web development. 
	I'm passionate about UX/UI desing and I love to create amazing experiences for users. 
	I've worked in different projects and companies, always looking for the best solution for the client.`,
	avatar: "/assets/me.webp",
	portfolioInfo: {
		name: "Portfolio",
		url: "https://ecaleb.dev",
	},
	contact: {
		link: {
			name: "Other links",
			url: "https://links.ecaleb.dev",
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
			from: "2024",
			to: "Present",
			description:
				"Developing web applications, landing pages and websites for clients.",
		},
		{
			company: "Indra Sistemas (Minsait)",
			position: "Frontend Developer",
			from: "2022",
			to: "2024",
			description: `I had the opportunity to work in intranet applications for the 
			company and dive into the world of Mobile Device Management.`,
		},
		{
			company: "K-tuin Sistemas Informáticos",
			position: "Frontend Developer",
			from: "2020",
			to: "2022",
			description: `During my time at this company I was in charge of developing the 
				company's internal tools. API integrations and complex frontend development.`,
		},
	],
	skills: [
		{
			name: "HTML",
			level: "Master",
		},
		{
			name: "CSS",
			level: "Master",
		},
		{
			name: "JavaScript",
			level: "Master",
		},
		{
			name: "Tailwind",
			level: "Advanced",
		},
		{
			name: "React",
			level: "Advanced",
		},
		{
			name: "Next.js",
			level: "Advanced",
		},
		{
			name: "TypeScript",
			level: "Advanced",
		},
		{
			name: "Node",
			level: "Advanced",
		},
		{
			name: "Git",
			level: "Advanced",
		},
		{
			name: "Github",
			level: "Advanced",
		},
		{
			name: "C",
			level: "Intermediate",
		},
		{
			name: "Python",
			level: "Intermediate",
		},
		{
			name: "Java",
			level: "Intermediate",
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
