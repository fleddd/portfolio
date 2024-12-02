import Card from '../../../components/ui/cards/card'
import { AboutIcon } from '../../../components/ui/images'
const About = () => {
	return (
		<section
			id='about'
			className=' min-h-dvh flex items-center gap-10 justify-center flex-col'
		>
			<h3 className='text-center text-2xl sm:text-4xl'>About me</h3>
			<div className='flex justify-center items-center gap-14 flex-col sm:flex-row'>
				<AboutIcon size={400} />
				<Card>
					<div>
						<span className='text-accent'>{'<p>'}</span>
						Hi!<span className='text-accent'>{'</p>'}</span> <br />{' '}
						<span className='text-accent'>{'<p>'}</span> I’m Oleh, a web
						developer passionate about designing and building engaging,
						user-friendly websites. I enjoy bringing ideas to life and crafting
						seamless digital experiences that make an impact. Outside of
						development, I love sports, travelling, books etc.{' '}
						<span className='text-accent'>{'</p>'}</span> <br />
						<br /> <span className='text-accent'>{'<p>'}</span>Let’s create
						something amazing together!
						<span className='text-accent'>{'</p>'}</span>
					</div>
				</Card>
			</div>
		</section>
	)
}

export default About
