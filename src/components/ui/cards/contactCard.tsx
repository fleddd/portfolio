import { motion, useMotionValue } from 'framer-motion'; // Додано useMotionValue
import { useState } from 'react'; // Додано useState
import DefaultIcon from '../images/icons/defaultIcon';

type TContact = {
	name: string;
	image: string;
	link: string;
	invertInDark?: boolean;
	variant?: 'default' | 'liquidGlass';
};

const ContactCard = ({
	name,
	image,
	link,
	invertInDark = false,
	variant = 'liquidGlass',
}: TContact) => {
	const variantClasses = {
		default: 'bg-white-secondary dark:bg-black-light shadow-md',
		liquidGlass:
			'bg-white/30 dark:bg-black/30 backdrop-blur-[18px] border border-white/20 dark:border-black/20 rounded-xl shadow-lg relative overflow-hidden',
	};

	// --- НОВІ ДОПОВНЕННЯ ---
	const [isHovered, setIsHovered] = useState(false);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const { currentTarget, clientX, clientY } = event;
		const { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	};
	// --- КІНЕЦЬ НОВИХ ДОПОВНЕНЬ ---

	return (
		<motion.div // <-- Змінено div на motion.div
			className={
				variantClasses[variant] +
				' flex flex-col items-center justify-center gap-3 p-4 min-w-32 max-w-32 min-h-32'
			}
			// Додано обробники подій
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* soft glare / sheen behind content */}
			<div className="absolute inset-0 -z-10 rounded-xl overflow-hidden pointer-events-none">
				{/* subtle blurred light */}
				<div className="absolute -left-8 -top-6 w-36 h-20 rounded-full bg-white/6 dark:bg-white/8 blur-3xl opacity-80" />
				{/* faint gradient for depth */}
				<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent dark:via-black/6 opacity-60" />

				{/* --- НОВИЙ ЕФЕКТ "ПРОЖЕКТОРА" (SPOTLIGHT) --- */}
				{variant === 'liquidGlass' && (
					<motion.div
						className="absolute w-40 h-40 rounded-full" // Трохи менший розмір для меншої картки
						style={{
							top: mouseY,
							left: mouseX,
							x: "-50%", // Центруємо по курсору
							y: "-50%", // Центруємо по курсору
							background:
								"radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: isHovered ? 1 : 0 }} // Плавна поява/зникнення
						transition={{ duration: 0.2, ease: "easeOut" }}
					/>
				)}
			</div>

			<div className="relative z-10 text-sm">{name}</div>

			<motion.a
				whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
				href={link}
				target="_blank"
				className="relative z-10"
			>
				<DefaultIcon size={70} image={image} invertInDark={invertInDark} />
			</motion.a>
		</motion.div>
	);
};

export default ContactCard;