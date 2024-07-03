import { SocialLinksButtons } from "@/components/social/social-links-buttons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ResumeData } from "@/types";
import { GlobeIcon } from "lucide-react";

export function Intro({ data }: { data: ResumeData }) {
	return (
		<div className="flex items-center justify-between gap-4">
			<div className="flex flex-col gap-2">
				<h1 className="text-xl sm:text-3xl font-bold">{data.name}</h1>
				<p
					className="max-w-md text-balance text-sm text-muted-foreground
					sm:text-base"
				>
					{data.about}
				</p>
				<p className="flex items-center gap-2 text-sm text-muted-foreground sm:text-base">
					<GlobeIcon className="size-3" />
					{data.location}
				</p>
				<SocialLinksButtons data={data} />
			</div>
			<a
				href="https://github.com/ecaleb97"
				target="_blank"
				rel="noreferrer noopener"
			>
				<Avatar
					className="size-20 hidden mini:block mini:size-20 
					normal:size-28 border"
				>
					<AvatarImage src={data.avatar} alt="Caleb's portrait" />
					<AvatarFallback className="font-mono font-bold text-2xl">
						{data.initials}
					</AvatarFallback>
				</Avatar>
			</a>
		</div>
	);
}
