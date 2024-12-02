import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NavButton } from '../../components/ui'

const ScrollHeader = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 65) {
				setIsScrolled(true)
			} else setIsScrolled(false)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<AnimatePresence>
			{isScrolled && (
				<motion.nav
					transition={{ type: 'spring', bounce: false, duration: 0.5 }}
					initial={{ y: -20 }}
					animate={{ y: 10 }}
					exit={{ y: -50 }}
					className='hidden sm:flex fixed top-0 left-0 w-max inset-x-0 mx-auto z-20 
                 items-center justify-center  bg-white gap-5 py-2 px-4 rounded-xl border-2  shadow-md'
				>
					<NavButton text='Home' section={'greeting'} />
					<NavButton text='About' section={'about'} />
					<NavButton text='Skills' section={'skills'} />
					<NavButton text='Projects' section={'projects'} />
					<NavButton text='Contact' section={'contact'} />
				</motion.nav>
			)}
		</AnimatePresence>
	)
}

export default ScrollHeader
