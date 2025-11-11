import { ContactCard } from '../../../components/ui/cards/index'
import { contacts } from '../../../data/contacts'

const Contact = () => {
	return (
		<footer
			id='contact'
			className='my-20 flex flex-col items-center w-full gap-10'
		>
			<h3 className='text-center text-2xl sm:text-4xl'>Contact me</h3>
			<article className='grid max-sm:grid-cols-1  grid-cols-3 gap-5 justify-center'>
				{contacts.map(contact => (
					<ContactCard
						name={contact.name}
						image={contact.image}
						link={contact.link}
						invertInDark={contact.invertInDark}
					/>
				))}
			</article>
		</footer>
	)
}

export default Contact
