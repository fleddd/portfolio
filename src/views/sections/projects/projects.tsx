import ProjectCard from '../../../components/ui/cards/projectCard.tsx'
import { projects } from '../../../data/projects.ts'

const Projects = () => {
	return (
		<section
			id='projects'
			className='flex flex-col items-center gap-10 my-20 text-center'
		>
			<div className='text-center text-2xl sm:text-4xl'>Projects</div>
			<div>Open to cooperate {'<._.>'}</div>
			{projects.map(project => (
				<ProjectCard {...project} />
			))}
		</section>
	)
}

export default Projects
