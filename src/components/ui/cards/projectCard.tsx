import { motion } from 'framer-motion'
import { IChildrenWrapper } from '../../../types/Wrappers.ts'

interface IProjectCard extends IChildrenWrapper {
	name: string
	description: string
	stack: string[]
	link: {
		public: string
		github: string
	}
}

const projectCard = ({ name, description, stack, link }: IProjectCard) => {
	return (
		<div
			className={
				'flex flex-col justify-between min-w-72 max-w-72 min-h-72 shadow-md gap-5 p-3 pt-5 rounded-xl text-xs'
			}
		>
			<div className={'flex flex-col gap-5'}>
				<div className={'font-bold text-lg '}>{name}</div>
				<div className={'text-start text-gray-600 font-medium'}>
					{description}
				</div>
				<div className={'space-y-1'}>
					<div className={'font-bold '}>Stack:</div>
					<div className={'flex gap-2  flex-wrap  text-black cursor-pointer '}>
						{stack.map(item => (
							<motion.span
								className={'border-2 border-black rounded-xl px-2 py-1'}
								whileHover={{
									color: '#036fff',
									borderColor: '#036fff',
									transition: { type: 'spring' },
								}}
								key={item}
							>
								{item}
							</motion.span>
						))}
					</div>
				</div>
			</div>
			<div className={'py-2 space-x-2'}>
				{link.public && (

				<motion.a
					whileHover={{
						background: '#036fff',
						color: '#ffffff',
						transition: { type: 'spring' },
					}}
					href={link.public}
					className={
						'px-2 py-2 text-center bg-transparent border-2 text-accent border-accent text-xl rounded-xl'
					}
					target={'_blank'}
				>
					Link
				</motion.a>
				)} 
				<motion.a
					whileHover={{
						background: '#036fff',
						color: '#ffffff',
						transition: { type: 'spring' },
					}}
					href={link.github}
					className={
						'px-2 py-2 text-center bg-transparent border-2 text-accent border-accent text-xl rounded-xl'
					}
					target={'_blank'}
				>
					Github
				</motion.a>
			</div>
		</div>
	)
}

export default projectCard
