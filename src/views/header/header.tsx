import { useState } from 'react'
import BurgerMenu from './burgerMenu'
import BurgerToggler from './BurgerToggler'
import Navigation from './headerNavigation'
import ThemeToggle from './ThemeToggle'

const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const toggle = () => setIsOpen(prev => !prev)

	return (
		<header className='w-full min-h-12 flex justify-between items-center gap-10 py-5 px-10  bg-white-secondary dark:bg-black-secondary'>
			<h2 className='text-xl'>Oleh Fedkiv Portfolio</h2>
			<div className='hidden sm:flex items-center gap-6'>
				<Navigation />
				<ThemeToggle />
			</div>
			<div className='flex items-center gap-4 sm:hidden'>
				<ThemeToggle />
				<BurgerToggler toggle={toggle} isOpen={isOpen} />
			</div>
			<BurgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
		</header>
	)
}

export default Header
