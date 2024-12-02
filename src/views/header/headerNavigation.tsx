import { NavButton } from '../../components/ui'
const Navigation = ({}) => {
	return (
		<nav className='hidden sm:flex justify-center gap-10 font-light'>
			<NavButton text='Home' section={'greeting'} />
			<NavButton text='About' section={'about'} />
			<NavButton text='Skills' section={'skills'} />
			<NavButton text='Projects' section={'projects'} />
			<NavButton text='Contact' section={'contact'} />
		</nav>
	)
}

export default Navigation
