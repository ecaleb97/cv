import { RESUME_DATA } from "@/data/resume_data";
import {
	Nextjs,
	Node,
	TailwindCSS as Tailwind,
	CSS,
	HTML,
	Git,
	Github,
	TypeScript,
	JavaScript,
	Java,
	React,
	C,
	Python,
} from "@/components/icons";
import { SectionHeading } from "./heading/section-heading";

export function Skills() {
	const { skills } = RESUME_DATA;

	const Icons: {
		[key: string]: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
	} = {
		HTML,
		CSS,
		Tailwind,
		Nextjs,
		Node,
		TypeScript,
		Git,
		Github,
		JavaScript,
		Java,
		React,
		C,
		Python,
	};

	return (
		<div className="">
			<SectionHeading name="Skills" />
			<ul className="inline-flex gap-2 flex-wrap">
				{skills.map((skill) => {
					const iconName: string =
						skill.name === "Next.js" ? "Nextjs" : skill.name;
					console.log(iconName);
					const Icon = Icons[iconName];
					console.log(Icon);
					return (
						<li
							key={skill.name}
							className="items-center bg-[#eee] rounded-sm text-black flex
				text-sm font-medium gap-2 px-2 py-1"
						>
							{Icon ? <Icon className="size-4" /> : null}
							<span className="font-mono">{skill.name}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
