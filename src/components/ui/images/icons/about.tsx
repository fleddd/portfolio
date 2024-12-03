import { TIcon } from "../../../../types/icons";
import icon from "../svg/about.svg";
const AboutIcon = ({ size }: TIcon) => {
	return (
		<img
			src={icon}
			height={size}
			width={size}
			alt="icon"
			loading="lazy"
			className="z-0"
		/>
	);
};

export default AboutIcon;
