import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ResumeData } from "@/types";
import { GlobeIcon, Link, MailIcon } from "lucide-react";

export function SocialLinksButtons({ data }: { data: ResumeData }) {
	const linkData = [
		{
			name: data.portfolioInfo.name,
			url: data.portfolioInfo.url,
			icon: GlobeIcon,
			type: "website",
		},
		...data.contact.social.map((social) => ({
			name: social.name,
			url: social.url,
			icon: social.icon,
			type: "social",
		})),
		// {
		// 	name: data.contact.link.name,
		// 	url: data.contact.link.url,
		// 	icon: Link,
		// 	type: "Other links",
		// },
		{
			name: data.contact.email.name,
			url: `mailto:${data.contact.email.at}`,
			icon: MailIcon,
			type: "email",
		},
	];

	return (
		<>
			<ul className="print:hidden flex flex-wrap gap-2">
				{linkData
					.filter((link) => link.url)
					.map((link) => (
						<li key={link.name}>
							<Tooltip>
								<TooltipTrigger>
									<Button
										asChild
										variant="outline"
										className="size-8"
										size="icon"
									>
										<a
											href={link.url}
											rel="noreferrer noopener"
											target="_blank"
											aria-label={link.name}
										>
											<link.icon className="size-4" />
										</a>
									</Button>
								</TooltipTrigger>
								<TooltipContent side="bottom">
									<p>{link.name}</p>
								</TooltipContent>
							</Tooltip>
						</li>
					))}
			</ul>
			<ul
				className="hidden print:flex flex-col gap-x-1 font-mono 
        text-sm text-muted-foreground"
			>
				{linkData
					.filter((link) => ["website"].includes(link.type))
					.map((link) => (
						<li key={link.url}>
							<a href={link.url}>{link.url}</a>
						</li>
					))}
			</ul>
			<ul className="hidden print:block text-muted-foreground">
				<li>ecaleb.vz@gmail.com</li>
			</ul>
		</>
	);
}
