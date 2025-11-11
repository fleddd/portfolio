import { TIcon } from "../../../../types/icons";
import icon from "../../../../assets/dark-theme-toggler.svg";
const GreetingIcon = ({ size }: TIcon) => {
    return (
        <img
            src={icon}
            height={size}
            width={size}
            alt="icon"
            loading="lazy"
            className="dark:invert hover:scale-95 transition-transform duration-200"
        />
    );
};

export default GreetingIcon;
