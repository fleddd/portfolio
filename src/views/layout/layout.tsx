import { isMobile } from 'react-device-detect'
import Header from '../header/header'
import ScrollHeader from '../header/scrollHeader'
import { About, Contact, Greeting, Projects, Skills } from '../sections'
const Layout = () => {
	return (
		<>
			<Header />
			{!isMobile && <ScrollHeader />}
			<main className='flex flex-col gap-20'>
				<Greeting />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</>
	)
}

export default Layout
