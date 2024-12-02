import Button from './button'

type TNavButton = {
	section: string
	text: string
	onClick?: () => void
}

const NavButton = ({ section, text, onClick }: TNavButton) => {
	return (
		<Button
			styles='text-white sm:text-black hover:text-accent hover:transition-all hover:transition-ease'
			onClick={() => {
				if (onClick) onClick()
				// just to be sure that ui loaded so it can be scrolled

				setTimeout(() => {
					document
						.getElementById(section)
						?.scrollIntoView({ behavior: 'smooth' })
				}, 100)
			}}
		>
			{text}
		</Button>
	)
}

export default NavButton
