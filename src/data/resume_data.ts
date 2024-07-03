import { Github } from "@/components/icons/github";
import { LinkedIn } from "@/components/icons/linkedin";
import { X as Twitter } from "@/components/icons/x";

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
			{
				name: "X (Twitter)",
				url: "https://x.com/ecaleb97",
				icon: Twitter,
			},
		],
	},
	education: [
		{
			school: "Polytechnic University of Madrid",
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
			description: "Developing and maintaining MDM solutions for clients.",
		},
		{
			company: "K-tuin Sistemas Informáticos",
			position: "Frontend Developer",
			from: "2020",
			to: "2022",
			description: "Repairing, maintaining Apple products.",
		},
		{
			company: "Freelance",
			position: "Private Math Tutor",
			from: "2017",
			to: "Present",
			description: "Teaching math to students.",
		},
	],
	projects: [
		{
			title: "We Grow",
			techStack: [
				"TypeScript",
				"Next.js",
				"Tailwind CSS",
				"Fullstack Developer",
			],
			description: "Hack4good Telefonica 2024 winner project",
			link: {
				href: "",
			},
		},
		{
			title: "e-commerce",
			techStack: [
				"TypeScript",
				"Next.js",
				"Tailwind CSS",
				"Fullstack Developer",
			],
			description: "e-commerce website for a client",
			link: {
				href: "https://ecaleb.dev",
			},
		},
		{
			title: "Auth Template",
			techStack: [
				"TypeScript",
				"Next.js",
				"Tailwind CSS",
				"Fullstack Developer",
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
				href: "",
			},
		},
	],
};
