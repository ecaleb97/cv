import { ResumeData } from "@/types";
import { SectionHeading } from "../heading/section-heading";

export function WorkExperience({ data }: { data: ResumeData }) {
	return (
		<section className="space-y-4">
			<SectionHeading name="Work Experience" />
			<ul className="space-y-4">
				{data.work.map((experience) => (
					<li key={experience.description} className="space-y-1">
						<div className="flex items-center justify-between">
							<h3 className="font-semibold tracking-wide">
								{experience.company}
							</h3>
							<p className="text-muted-foreground">
								{experience.from} - {experience.to}
							</p>
						</div>
						<h4 className="text-sm">{experience.position}</h4>
						<p className="text-sm text-muted-foreground">
							{experience.description}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}
