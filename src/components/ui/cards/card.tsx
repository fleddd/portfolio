import { motion, useInView, useMotionValue } from "framer-motion"; // Додано useMotionValue
import { useRef, useState } from "react"; // Додано useState
import { twMerge } from "tailwind-merge";
import { IChildrenWrapper } from "../../../types/Wrappers";

type CardVariant = "default" | "liquidGlass";

interface ICardProps extends IChildrenWrapper {
	variant?: CardVariant;
}

const Card = ({ children, styles, variant = "default" }: ICardProps) => {
	const refDiv = useRef(null);
	const isInDiv = useInView(refDiv, { amount: 0.01 });

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

	// Стилі по варіантах
	const variantClasses = {
		default: "bg-white-secondary dark:bg-black-secondary shadow-shadow-accent shadow-md dark:shadow-lg",
		liquidGlass:
			"bg-white/30 dark:bg-black/30 backdrop-blur-[20px] border border-white/20 dark:border-black/20 shadow-lg",
	};

	return (
		<motion.div
			layout
			variants={{
				hidden: {
					scale: 0,
				},
				visible: {
					scale: 1,
					transition: {
						duration: 0.6,
						type: "spring",
					},
				},
			}}
			ref={refDiv}
			initial={"hidden"}
			animate={isInDiv ? "visible" : ""}
			className={twMerge(
				"min-h-40 sm:max-w-96 sm:min-w-80 max-w-72 rounded-xl overflow-hidden p-4",
				"relative", // Додано relative для позиціонування
				variantClasses[variant],
				styles,
			)}
			// Додано обробники подій
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* --- НОВИЙ ЕФЕКТ "ПРОЖЕКТОРА" (SPOTLIGHT) --- */}
			{variant === "liquidGlass" && (
				<div className="absolute inset-0 -z-10 pointer-events-none rounded-xl overflow-hidden">
					<motion.div
						className="absolute w-56 h-56 rounded-full"
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
				</div>
			)}

			{/* Обгортка, щоб контент був над ефектом */}
			<div className="relative z-10">
				{children}
			</div>
		</motion.div>
	);
};

export default Card;