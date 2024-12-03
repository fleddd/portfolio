import { TIcon } from "../../../../types/icons";
import icon from "../svg/greeting.svg";
const GreetingIcon = ({ size }: TIcon) => {
	return (
		<img
			src={icon}
			height={size}
			width={size}
			alt="icon"
			loading="lazy"
			className="	 drop-shadow-xl z-0"
		/>
	);
};

export default GreetingIcon;
