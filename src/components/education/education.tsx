import { ResumeData } from "@/types";
import { SectionHeading } from "../heading/section-heading";

export function Education({ data }: { data: ResumeData }) {
	return (
		<section className="space-y-4">
			<SectionHeading name="Education" />
			<ul className="space-y-4">
				{data.education.map((education) => (
					<li key={education.school} className="space-y-2">
						<div className="flex items-center justify-between">
							<h3 className="font-semibold">{education.school}</h3>
							<p className="text-muted-foreground">
								{education.from} - {education.to}
							</p>
						</div>
						<p className="text-muted-foreground text-sm">{education.degree}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
