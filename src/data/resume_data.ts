import { Github } from "@/components/icons/github";
import { LinkedIn } from "@/components/icons/linkedin";

export const RESUME_DATA = {
	name: "Caleb Zamalloa",
	initials: "CZ",
	location: "Madrid, Spain",
	about: `Fullstack Developer +3 years of experience.`,
	summary: `+3 years of experience in web development. 
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
			at: "calebzamalloa90@gmail.com",
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
			to: "2025",
		},
	],
	work: [
		{
			company: "Freelance",
			position: "Fullstack Developer",
			from: "2024",
			to: "Present",
			description:
				`In my capacity as a freelance developer, I specialize in building and maintaining responsive websites from concept to deployment. I collaborated directly with clients
				to translate their design visions into functional, reusable components and dynamic user interfaces. A key part of my role involved integrating third-party and custom
				APIs to ensure full functionality.`,
		},
		{
			company: "Indra Sistemas (Minsait)",
			position: "Frontend Developer",
			from: "2022",
			to: "2024",
			description: `I participated in the development of web apps focused on usability and performance. My work involved implementing dynamic interfaces
			using TypeScript and React (Next.js), ensuring accessibility and cross-device compatibility. Collaborated with the design team to translate mockups into
			real user experiences and with the backend team to integrate services through REST APIs.`,
		},
		{
			company: "K-tuin Sistemas Informáticos",
			position: "Frontend Developer",
			from: "2020",
			to: "2022",
			description: `In my role as a frontend developer, I was responsible for developing and maintaining optimized and responsive web apps, ensuring the best
			user experience, as well as integrating APIs in collaboration with the backend team. During this experience, I translated designs into reusable components
			and improved web performance through code optimization and unit testing.`,
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
			techStack: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
			description:
				"This project consists of a recipe search engine using the Vercel AI SDK",
			link: {
				href: "https://recetas.ecaleb.dev",
			},
		},
		{
			title: "We Grow",
			techStack: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
			description:
				"(Winner Hack4Good 2024) Me and my team built this project in less than 24 hours to help local businesses in Spain.",
			link: {
				href: "",
			},
		},
		{
			title: "AI Chatbot",
			techStack: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
			description:
				"This project is using Vercel's AI SDK to create a chatbot that can answer questions about the project.",
			link: {
				href: "",
			},
		},
		{
			title: "Github Profile Viewer",
			techStack: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
			description:
				"A tool for displaying GitHub user profiles, showcasing profile details, repositories, contributions, and activity.",
			link: {
				href: "",
			},
		},
		{
			title: "Libft",
			techStack: ["C", "Makefile"],
			description:
				"In this project I had to recreate some of the functions from the C standard library.",
			link: {
				href: "https://github.com/ecaleb97/libft",
			},
		},
		{
			title: "Pacman",
			techStack: ["C", "Makefile", "minilibx"],
			description:
				"In this project I had to recreate a 2D game using the minilibx library. Similar to the classic game Pacman.",
			link: {
				href: "https://github.com/ecaleb97/so_long",
			},
		},
	],
};
