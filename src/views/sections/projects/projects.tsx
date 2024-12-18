import {projects} from "../../../data/projects.ts";
import ProjectCard from "../../../components/ui/cards/projectCard.tsx";

const Projects = () => {


	return (
		<div
			id="projects"
			className="flex flex-col items-center gap-10 my-20 text-center"
		>
			<div className="text-center text-2xl sm:text-4xl">Projects</div>
			<div>Open to cooperate {"<._.>"}</div>
			{projects.map((project) => (
				<ProjectCard {...project} />
			))}
		</div>
	);
};

export default Projects;
