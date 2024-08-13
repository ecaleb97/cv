import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { ArrowUpRight } from "lucide-react";

type Props = {
	title: string;
	description: string;
	tags: readonly string[];
	link: string;
};

export function ProjectCard({
	title,
	description,
	tags,
	link,
}: Readonly<Props>) {
	return (
		<Card>
			<CardHeader className="px-4 pt-4 pb-2">
				<div className="space-y-1">
					<CardTitle className="pb-2">
						<Link
							href={link}
							className="text-lg flex items-center gap-2 hover:underline hover:underline-offset-4 hover:decoration-dotted"
							target="_blank"
							rel="noopener noreferer"
						>
							{title}
							<ArrowUpRight className="size-3 print:hidden" />
						</Link>
					</CardTitle>
					<CardDescription className="min-h-10 overflow-hidden">
						{description}
					</CardDescription>
				</div>
			</CardHeader>
			<CardContent className="px-4 pb-4 print:hidden">
				<div className="mt-2 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<Badge
							key={tag}
							className="px-2 py-1 text-[10px] print:px-1 print:py-0.5 
							print:text-[8px] print:leading-tight bg-slate-200/50 
							text-black rounded-md hover:bg-transparent"
						>
							{tag}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
