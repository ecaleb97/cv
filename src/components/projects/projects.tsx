import { RESUME_DATA } from "@/data/resume_data";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "../heading/section-heading";

export function Projects() {
	return (
		<section className="print-force-new-page">
			<SectionHeading name="Projects" />
			<div className="my-4 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 sm:grid-cols-2 lg:grid-cols-3">
				{RESUME_DATA.projects.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						tags={project.techStack}
						link={project.link.href}
					/>
				))}
			</div>
		</section>
	);
}
