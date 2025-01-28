import { motion } from 'framer-motion'
import icon from '../svg/up-arrow.svg'
type TIcon = {
	size: number
}
const ArrowIcon = ({ size }: TIcon) => {
	return (
		<motion.img
			animate={{
				y: [0, 10, 0],
				transition: {
					ease: ['easeIn', 'easeOut'],
					repeatType: 'loop',
					repeat: Infinity,
					duration: 1.2,
				},
			}}
			src={icon}
			height={size}
			width={size}
			alt='arrow icon'
			loading='lazy'
			className='z-0'
		/>
	)
}

export default ArrowIcon
