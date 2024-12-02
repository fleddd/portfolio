import { motion } from 'framer-motion'
import { TIcon } from '../../../../types/icons'
import starOff from '../svg/star-off.svg'
import starOn from '../svg/star-on.svg'

interface Star extends TIcon {
	amount: number
}

const Stars = ({ size, amount, styles }: Star) => {
	const maxStars = [1, 2, 3, 4, 5]
	return (
		<div className='flex'>
			{maxStars.map(el => (
				<motion.img
					whileHover={{
						filter: el <= amount ? 'brightness(1.3)' : '',
						scale: 1.2, // Animation effect on hover
					}}
					transition={{
						type: 'spring',
					}}
					className={styles}
					height={size}
					width={size}
					src={el <= amount ? starOn : starOff}
				/>
			))}
		</div>
	)
}

export default Stars
