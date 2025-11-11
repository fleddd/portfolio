import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { IChildrenWrapper } from "../../../types/Wrappers";
import { StatusIcon } from "../images";
import DefaultIcon from "../images/icons/defaultIcon";
import Stars from "../images/icons/stars";

interface ISkillCard extends IChildrenWrapper {
	name: string;
	image: string;
	skill: number;
	status: number;
	invertInDark: boolean
}

const SkillCard = ({
	children,
	styles,
	name,
	image,
	skill,
	status,
	invertInDark
}: ISkillCard) => {
	return (
		<div
			className={twMerge(
				"flex flex-col min-w-48 max-w-48 min-h-48 bg-white-secondary dark:bg-black-light gap-2 p-3 pt-5 rounded-xl text-md",
				styles,
			)}
		>
			<motion.div
				whileHover={{ scale: 1.1, transition: { type: "spring" } }}
				className="flex items-center justify-center"
			>
				<DefaultIcon size={50} image={image} invertInDark={invertInDark} />
			</motion.div>
			<div className="flex flex-col justify-center items-start ">
				<div>Name: {name}</div>
				<div className="flex items-center">
					Skill: <Stars size={15} amount={skill} />
				</div>
				<div className="flex items-center gap-2">
					Status: <StatusIcon size={15} status={status} />
				</div>
			</div>

			{children}
		</div>
	);
};

export default SkillCard;
