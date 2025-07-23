import ProjectCard from '../../../components/ui/cards/projectCard.tsx'
import { projects } from '../../../data/projects.ts'

const Projects = () => {
	return (
		<section
			id='projects'
			className='flex flex-col justify-center items-center gap-10 my-20 text-center'
		>
			<div className='text-center text-2xl sm:text-4xl'>Projects</div>
			<div>Open to cooperate {'<._.>'}</div>
			<div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>

			{projects.map(project => (
				<ProjectCard {...project} />
			))}
			</div>
		</section>
	)
}

export default Projects
