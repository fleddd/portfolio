import { motion, useMotionValue } from 'framer-motion'; // Додано useMotionValue
import { useState } from 'react'; // Додано useState
import { IChildrenWrapper } from '../../../types/Wrappers.ts';

interface IProjectCard extends IChildrenWrapper {
	name: string;
	description: string;
	stack: string[];
	link: {
		public: string;
		github: string;
	};
}

const ProjectCard = ({ name, description, stack, link }: IProjectCard) => {
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
			className={`
                flex flex-col justify-between min-w-80 max-w-80 min-h-72 
                bg-white/20 dark:bg-black/20 
                backdrop-blur-[18px] 
                border border-white/20 dark:border-black/20
                rounded-xl p-4 pt-5 gap-5 relative overflow-hidden shadow-lg
            `}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="absolute inset-0 -z-10 pointer-events-none rounded-xl overflow-hidden">
				<div className="absolute -left-10 -top-8 w-72 h-36 rounded-full bg-white/6 dark:bg-white/8 blur-3xl opacity-70" />
				<div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/3 to-transparent dark:via-black/6 opacity-60" />

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
			</div>

			<div className="relative z-10 flex flex-col gap-5">
				<div className="font-bold text-lg">{name}</div>
				<div className="text-start text-gray-600 dark:text-gray-400 font-medium">{description}</div>
				<div className="space-y-1">
					<div className="font-bold">Stack:</div>
					<div className="flex gap-2 flex-wrap  text-black dark:text-white cursor-pointer">
						{stack.map((item) => (
							<motion.span
								key={item}
								whileHover={{ scale: 1.05 }}
								transition={{ type: 'spring', stiffness: 300 }}
								className="
                                    border-2 rounded-xl px-2 py-1
                                    text-black dark:text-white
                                    border-black dark:border-white
                                    hover:text-[#036fff] hover:border-[#036fff]
                                    cursor-pointer
                                    transition-colors duration-300
                                "
							>
								{item}
							</motion.span>
						))}
					</div>
				</div>
			</div>

			<div className="relative z-10 py-2 space-x-2 flex">
				{link.public && (
					<motion.a
						whileHover={{
							background: '#036fff',
							color: '#ffffff',
							transition: { type: 'spring' },
						}}
						href={link.public}
						className="px-3 py-2 text-center bg-transparent border-2 text-accent border-accent text-sm rounded-xl"
						target="_blank"
					>
						Link
					</motion.a>
				)}
				<motion.a
					whileHover={{
						background: '#036fff',
						color: '#ffffff',
						transition: { type: 'spring' },
					}}
					href={link.github}
					className="px-3 py-2 text-center bg-transparent border-2 text-accent border-accent text-sm rounded-xl"
					target="_blank"
				>
					Github
				</motion.a>
			</div>
		</motion.div>
	);
};

export default ProjectCard;