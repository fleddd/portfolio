import { motion, useMotionValue } from "framer-motion"; // Додано useMotionValue
import { useState } from "react"; // Додано useState
import { twMerge } from "tailwind-merge";
import { IChildrenWrapper } from "../../../types/Wrappers";
import { StatusIcon } from "../images";
import DefaultIcon from "../images/icons/defaultIcon";
import Stars from "../images/icons/stars";

type Variant = "default" | "liquidGlass";

interface ISkillCard extends IChildrenWrapper {
	name: string;
	image: string;
	skill: number;
	status: number;
	invertInDark?: boolean;
	variant?: Variant;
}

const SkillCard = ({
	children,
	styles,
	name,
	image,
	skill,
	status,
	invertInDark = false,
	variant = "liquidGlass",
}: ISkillCard) => {
	const variantClasses: Record<Variant, string> = {
		default:
			"bg-white-secondary dark:bg-black-light shadow-md",
		liquidGlass:
			"bg-white/30 dark:bg-black/30 backdrop-blur-[18px] border border-white/20 dark:border-black/20 shadow-lg bg-gradient-to-b from-white/10 via-white/6 to-white/2 dark:from-black/8 dark:via-black/10 dark:to-black/4",
	};

	const [isHovered, setIsHovered] = useState(false);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const { currentTarget, clientX, clientY } = event;
		const { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	};

	return (
		<motion.div
			className={twMerge(
				"flex flex-col min-w-48 max-w-48 min-h-48 gap-2 p-3 pt-5 rounded-xl text-md relative overflow-hidden",
				variantClasses[variant],
				styles,
			)}
			// Додаємо обробники подій
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* soft glare / sheen behind content */}
			<div className="absolute inset-0 -z-10 pointer-events-none rounded-xl overflow-hidden">
				{/* subtle blurred light */}
				<div className="absolute -left-16 -top-8 w-44 h-24 rounded-full bg-white/6 dark:bg-white/8 blur-3xl opacity-80" />
				{/* diagonal faint gradient for depth */}
				<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent dark:via-black/6 opacity-60" />

				{variant === "liquidGlass" && (
					<motion.div
						className="absolute w-56 h-56 rounded-full"
						style={{
							top: mouseY,
							left: mouseX,
							x: "-50%",
							y: "-50%",
							background:
								"radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: isHovered ? 1 : 0 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
					/>
				)}
			</div>

			<motion.div
				whileHover={{ scale: 1.06, transition: { type: "spring", stiffness: 300 } }}
				className="flex items-center justify-center"
			>
				<DefaultIcon size={50} image={image} invertInDark={invertInDark} />
			</motion.div>

			<div className="relative z-10 flex flex-col justify-center items-start">
				<div className="font-medium">Name: {name}</div>
				<div className="flex items-center">
					<span className="mr-2">Skill:</span>
					<Stars size={15} amount={skill} />
				</div>
				<div className="flex items-center gap-2">
					<span className="mr-1">Status:</span>
					<StatusIcon size={15} status={status} />
				</div>
			</div>

			{/* children (controls, badges, etc.) */}
			<div className="relative z-10 w-full">{children}</div>
		</motion.div>
	);
};

export default SkillCard;