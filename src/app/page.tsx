import { About } from "@/components/about/about";
import { Education } from "@/components/education/education";
import { Intro } from "@/components/intro/intro";
import { Projects } from "@/components/projects/projects";
import { WorkExperience } from "@/components/work/work-experience";
import { data } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "CV | Caleb Zamalloa",
	description:
		"Full-stack developer focused in create amazing UX/UI experiences.",
};

export default function Home() {
	return (
		<main
			className="container relative mx-auto scroll-my-12 overflow-auto
      p-4 print:p-12 md:p-16"
		>
			<section
				className="mx-auto w-full max-w-2xl space-y-8 bg-white
        print:space-y-6"
			>
				<Intro data={data} />
				<About data={data} />
				<WorkExperience data={data} />
				<Education data={data} />
				<Projects />
			</section>
		</main>
	);
}
