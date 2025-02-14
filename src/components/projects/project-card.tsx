import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter
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
			<CardFooter className="px-4 pb-4 print:hidden">
				<div className="mt-2 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<Badge
							key={tag}
							className="font-medium text-[.6rem] px-1 py-[.1rem] print:px-1 print:py-0.5 
							print:text-[8px] print:leading-tight bg-[#eee]
							text-[#444] rounded-md hover:bg-transparent"
						>
							{tag}
						</Badge>
					))}
				</div>
			</CardFooter>
		</Card>
	);
}
