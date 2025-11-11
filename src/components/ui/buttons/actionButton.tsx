import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { IChildrenWrapper } from "../../../types/Wrappers";
const ActionButton = ({ children, onClick, styles }: IChildrenWrapper) => {
	return (
		<motion.button
			whileHover={{ background: "#036fff", }}
			whileTap={{ scale: 0.95, background: "#036fff" }}
			transition={{
				type: "spring",
				duration: 0.8,
			}}
			onClick={onClick}
			type="button"
			className={twMerge(
				"cursor-pointer px-2 py-2 text-center bg-transparent border-2 text-accent hover:text-white border-accent text-xl rounded-xl ",
				styles,
			)}
		>
			{children}
		</motion.button>
	);
};

export default ActionButton;
