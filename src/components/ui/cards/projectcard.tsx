type TProjectCard = {
	image: string
	name: string
	link: string
	stack: string[]
	description: string
}

const ProjectCard = ({
	image,
	name,
	link,
	stack,
	description,
}: TProjectCard) => {
	return (
		<div>
			<img src={image} alt='project image' loading='lazy' />
			<div>
				<span>{name}</span>
			</div>
			<div>
				<div>{description}</div>
				<div>
					{stack.map(item => (
						<div>{item}</div>
					))}
				</div>
			</div>
			<a href={link} target='_blank' />
		</div>
	)
}

export default ProjectCard
