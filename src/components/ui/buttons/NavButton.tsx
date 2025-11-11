import { motion } from 'framer-motion'

type TNavButton = {
	section: string
	text: string
	onClick?: () => void
}

const NavButton = ({ onClick, section, text }: TNavButton) => {
	return (
		<motion.button
			initial={{ color: 'var(--text-color)' }}
			animate={{ color: 'var(--text-color)' }}
			whileHover={{ color: '#036fff' }}
			className="font-normal sm:text-base cursor-pointer"
			onClick={() => {
				if (onClick) onClick()
				setTimeout(() => {
					document
						.getElementById(section)
						?.scrollIntoView({ behavior: 'smooth' })
				}, 100)
			}}
		>
			{text}
		</motion.button>
	)
}

export default NavButton
