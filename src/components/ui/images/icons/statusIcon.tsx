import { motion } from 'framer-motion'
import blueCircle from '../../../../assets/blue-circle.svg'
import greenCircle from '../../../../assets/green-circle.svg'
import yellowCircle from '../../../../assets/yellow-circle.svg'
import { TIcon } from '../../../../types/icons'
interface IStatusIcon extends TIcon {
	status: number
}

const StatusIcon = ({ size, status }: IStatusIcon) => {
	const statuses = [greenCircle, yellowCircle, blueCircle]

	return (
		<motion.img
			animate={
				status == 1
					? {
							opacity: [0, 1, 0],
							transition: {
								ease: ['easeIn', 'easeOut'],
								repeatType: 'loop',
								repeat: Infinity,
								duration: 2,
							},
					  }
					: {}
			}
			height={size}
			width={size}
			src={statuses[status]}
			loading='lazy'
			alt='IconStatus'
		/>
	)
}

export default StatusIcon
