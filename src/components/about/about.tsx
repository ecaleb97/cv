import { SectionHeading } from "@/components/heading/section-heading";
import { ResumeData } from "@/types";

export function About({ data }: { data: ResumeData }) {
	return (
		<section className="space-y-4">
			<SectionHeading name="About" />
			<p className="text-pretty text-muted-foreground text-sm sm:text-base">
				{data.summary}
			</p>
		</section>
	);
}
