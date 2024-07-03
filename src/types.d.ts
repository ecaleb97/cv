export interface PortfolioInfo {
	name: string;
	url: string;
}

export interface ContactLink {
	name: string;
	url: string;
}

export interface ContactEmail {
	name: string;
	at: string;
}

export interface SocialLink {
	name: string;
	url: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ContactInfo {
	link: ContactLink;
	email: ContactEmail;
	social: Array<SocialLink>;
}

export interface Education {
	school: string;
	degree: string;
	from: string;
	to: string;
}

export interface Work {
	company: string;
	position: string;
	from: string;
	to: string;
	description: string;
}

export interface ResumeData {
	name: string;
	initials: string;
	location: string;
	about: string;
	summary: string;
	avatar: string;
	portfolioInfo: PortfolioInfo;
	contact: ContactInfo;
	education: Array<Education>;
	work: Array<Work>;
}
