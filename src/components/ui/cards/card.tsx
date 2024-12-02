import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { IChildrenWrapper } from '../../../types/Wrappers/TWrappers'
const Card = ({ children, styles }: IChildrenWrapper) => {
	const refDiv = useRef(null)
	const isInDiv = useInView(refDiv, { amount: 0.5 })
	return (
		<motion.div
			layout
			variants={{
				hidden: {
					scale: 0,
				},
				visible: {
					scale: 1,
					transition: {
						duration: 0.6,
						type: 'spring',
					},
				},
			}}
			ref={refDiv}
			initial={'hidden'}
			animate={isInDiv ? 'visible' : 'hidden'}
			className={twMerge(
				' min-h-40 sm:max-w-96 min-w-80 max-w-64 rounded-xl border-2 border-accent overflow-hidden p-4 shadow-accentXl',
				styles
			)}
		>
			{children}
		</motion.div>
	)
}

export default Card
