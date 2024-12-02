import { motion } from "framer-motion";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type WrapperProps = {
	children: ReactNode;
	onClick?: () => void;
	styles?: string;
};

const Button: React.FC<WrapperProps> = ({ children, onClick, styles }) => {
	return (
		<motion.button
			type="button"
			className={twMerge("font-normal", styles)}
			onClick={onClick}
			whileTap={{ scale: 0.9 }}
		>
			{children}
		</motion.button>
	);
};

export default Button;
