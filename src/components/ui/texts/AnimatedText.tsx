import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Option = {
	text: string
	styles: string
}

interface IAnimatedText {
	options: Option[]
	wrapper?: keyof JSX.IntrinsicElements
}

const animationVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.1,
		},
	},
}

const AnimatedText = ({ options, wrapper: Wrapper = 'p' }: IAnimatedText) => {
	const textRef = useRef(null)
	const isInView = useInView(textRef, { amount: 1 })

	return (
		<Wrapper>
			<motion.span
				ref={textRef}
				initial={'hidden'}
				animate={isInView ? 'visible' : ''}
				transition={{ staggerChildren: 0.05 }}
				aria-hidden
			>
				{options.map(line => (
					<span className={twMerge('block', line.styles)}>
						{line.text.split(' ').map(word => (
							<span className='inline-block'>
								{word.split('').map(char => (
									<motion.span
										className='inline-block'
										variants={animationVariants}
									>
										{char}
									</motion.span>
								))}
								<span className='inline-block'>&nbsp;</span>
							</span>
						))}
					</span>
				))}
			</motion.span>
		</Wrapper>
	)
}

export default AnimatedText
