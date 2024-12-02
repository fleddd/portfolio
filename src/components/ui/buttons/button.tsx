import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { IChildrenWrapper } from '../../../types/Wrappers/TWrappers'
const Button = ({ children, onClick, styles }: IChildrenWrapper) => {
	return (
		<motion.button
			type='button'
			className={twMerge('font-normal', styles)}
			onClick={onClick}
			whileTap={{ scale: 0.9 }}
		>
			{children}
		</motion.button>
	)
}

export default Button
