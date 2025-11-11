import { motion } from 'framer-motion'
import { ActionButton } from '../../../components/ui/buttons'
import { ArrowIcon, GreetingIcon } from '../../../components/ui/images'
import { AnimatedText } from '../../../components/ui/texts'
import useMousePosition from '../../../hooks/useMousePosition'
import { calculateRotation } from '../../../utils/calculateRotation'

const Greeting = () => {
	const mousePosition = useMousePosition()
	const { rotateX, rotateY } = calculateRotation(mousePosition.x, mousePosition.y)

	return (
		<section
			id="greeting"
			className="
		w-full section flex flex-col gap-10 sm:flex-row justify-around items-center font-bold relative overflow-hidden rounded-xl
		bg-white/30 dark:bg-black/20 backdrop-blur-[20px]
		border border-white/20 dark:border-black/20 shadow-lg
	"
		>
			{/* subtle glare / sheen */}
			<div className="absolute inset-0 -z-10 pointer-events-none rounded-xl overflow-hidden">
				<div className="absolute -left-16 -top-10 w-72 h-36 rounded-full bg-black/5 dark:bg-white/8 blur-3xl opacity-60" />
				<div className="absolute inset-0 bg-linear-to-tr from-transparent via-black/5 to-transparent dark:via-black/6 opacity-50" />
			</div>

			<article className="relative z-10 flex flex-col text-2xl sm:text-4xl gap-2">
				<div className="sm:min-w-80 min-h-36">
					<p className="text-black dark:text-white text-xl font-bold">Hello!</p>
					<AnimatedText
						wrapper="h2"
						options={[
							{
								text: "I'm a Web Developer",
								styles: 'text-accent font-bold w-56',
							},
							{
								text: 'I build things for web.',
								styles: 'text-black dark:text-white text-xl font-bold',
							},
						]}
					/>
				</div>

				<ActionButton
					onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
				>
					Get Started
				</ActionButton>

				<div className="mx-auto">
					<ArrowIcon size={30} />
				</div>
			</article>

			<motion.div
				className="relative z-10"
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
