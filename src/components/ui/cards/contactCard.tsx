import { motion } from 'framer-motion'
import DefaultIcon from '../images/icons/defaultIcon'

type TContact = {
	name: string
	image: string
	link: string
	invertInDark: boolean
}

const ContactCard = ({ name, image, link, invertInDark }: TContact) => {
	return (
		<div className='flex flex-col items-center justify-center gap-3 bg-white-secondary dark:bg-black-light p-4 rounded-xl min-w-32 max-w-32 min-h-32'>
			<div className='text-sm'>{name}</div>
			<motion.a whileHover={{ scale: 1.05 }} href={link} target='_blank'>
				<DefaultIcon size={70} image={image} invertInDark={invertInDark} />
			</motion.a>
		</div>
	)
}

export default ContactCard
