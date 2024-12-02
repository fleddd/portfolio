import Header from '../header/header'
import ScrollHeader from '../header/scrollHeader'
import { About, Contact, Greeting, Projects, Skills } from '../sections'
const Layout = () => {
	return (
		<>
			<Header />
			<ScrollHeader />
			<main className='flex flex-col gap-20'>
				<Greeting />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>

			{/* <Footer /> */}
		</>
	)
}

export default Layout
