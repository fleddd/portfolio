import { ActionButton } from '@components/ui'
import { ArrowIcon } from '@components/ui/images'
import GreetingIcon from '@components/ui/images/icons/greeting'
import { motion } from 'framer-motion'
import { AnimatedText } from '../../../components/ui/texts'
import useMousePosition from '../../../hooks/useMousePosition'
import { calculateRotation } from '../../../utils/calculateRotation'
const Greeting = () => {
	const mousePosition = useMousePosition()

	const { rotateX, rotateY } = calculateRotation(
		mousePosition.x,
		mousePosition.y
	)

	return (
		<section
			id='greeting'
			className=' w-full section flex flex-col gap-10 sm:flex-row justify-around items-center font-bold '
		>
			<div className=' flex flex-col text-2xl sm:text-4xl gap-2'>
				<div className='min-w-80 min-h-36 '>
					<p className='text-xl font-bold'>Hello!</p>
					<AnimatedText
						wrapper='h2'
						options={[
							{
								text: "I'm a Web Developer",
								styles: 'text-accent font-bold w-56',
							},
							{
								text: 'I build things for web.',
								styles: 'text-xl font-bold',
							},
						]}
					/>
				</div>
				<ActionButton
					onClick={() =>
						document
							.getElementById('about')
							?.scrollIntoView({ behavior: 'smooth' })
					}
				>
					Get Started
				</ActionButton>
				<div className='mx-auto'>
					<ArrowIcon size={30} />
				</div>
			</div>
			<motion.div
				className=''
				whileHover={{
					rotateX: rotateX,
					rotateY: rotateY,
				}}
				transition={{
					type: 'spring',
					stiffness: 120,
					damping: 15,
				}}
			>
				<GreetingIcon size={window.innerWidth > 640 ? 300 : 150} />
			</motion.div>
		</section>
	)
}

export default Greeting
