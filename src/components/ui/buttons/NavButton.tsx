import { motion } from "framer-motion";

type TNavButton = {
	section: string;
	text: string;
	onClick?: () => void;
};

const NavButton = ({ onClick, section, text }: TNavButton) => {
	return (
		<motion.button
			whileHover={{
				color: "#036fff",
			}}
			type="button"
			className={`font-normal text-white sm:text-black`}
			onClick={() => {
				if (onClick) onClick();
				setTimeout(() => {
					document
						.getElementById(section)
						?.scrollIntoView({ behavior: "smooth" });
				}, 100);
			}}
		>
			{text}
		</motion.button>
	);
};

export default NavButton;
