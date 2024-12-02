import { twMerge } from 'tailwind-merge'
import { IChildrenWrapper } from '../../../types/Wrappers/TWrappers'
import DefaultIcon from '../images/icons/frontendIcons/frontend'

interface SkillCard extends IChildrenWrapper {
	name: string
	image: string
}

const SkillCard = ({ children, styles, name, image }: SkillCard) => {
	return (
		<div
			className={twMerge(
				'flex flex-col min-w-40 min-h-40 shadow-lg p-2 rounded-xl text-sm',
				styles
			)}
		>
			<div className='flex items-center justify-center'>
				<DefaultIcon size={50} image={image} />
			</div>
			<div>Name: {name}</div>

			{children}
		</div>
	)
}

export default SkillCard
