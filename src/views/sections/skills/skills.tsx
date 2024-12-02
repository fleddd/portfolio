import SkillCard from '../../../components/ui/cards/skillcard'
import { icons } from '../../../components/ui/images/icons/frontendIcons/frontendicons'
const Skills = () => {
	return (
		<section
			id='skills'
			className=' min-h-dvh flex items-center gap-10 justify-center flex-col'
		>
			<h3 className='text-center text-2xl sm:text-4xl'>My stack</h3>
			<div className='flex justify-center items-center gap-14 flex-col sm:flex-row'>
				<div>
					<div>Front-end</div>
					<div className='flex'>
						{icons.map(icon => (
							<SkillCard name={icon.name} image={icon.src} />
						))}
					</div>
				</div>
				<div>Back-end</div>
			</div>
		</section>
	)
}

export default Skills
