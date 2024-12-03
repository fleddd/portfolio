import { motion } from "framer-motion";

type TContact = {
	name: string;
	image: string;
	link: string;
};

const ContactCard = ({ name, image, link }: TContact) => {
	return (
		<div className="flex flex-col items-center justify-center gap-3 ">
			<div className="text-sm">{name}</div>
			<motion.a whileHover={{ scale: 1.05 }} href={link} target="_blank">
				<img src={image} height={70} width={70} />
			</motion.a>
		</div>
	);
};

export default ContactCard;
