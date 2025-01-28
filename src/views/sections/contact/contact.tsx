import { ContactCard } from '../../../components/ui/cards/index'
import { contacts } from '../../../data/contacts'

const Contact = () => {
	return (
		<footer
			id='contact'
			className='my-20 flex flex-col items-center w-full gap-10'
		>
			<h3 className='text-center text-2xl sm:text-4xl'>Contact me</h3>
			<div className='grid max-sm:grid-cols-2  grid-cols-2 gap-5'>
				{contacts.map(contact => (
					<ContactCard
						name={contact.name}
						image={contact.image}
						link={contact.link}
					/>
				))}
			</div>
		</footer>
	)
}

export default Contact
