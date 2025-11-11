import { TIcon } from '../../../../types/icons';

interface DefaultIconProps extends TIcon {
	image: string;
	invertInDark?: boolean;
}

const DefaultIcon = ({
	size = 24,
	styles = '',
	image,
	invertInDark = false,
}: DefaultIconProps) => {

	return (
		<img
			src={image}
			alt="icon"
			height={size}
			width={size}
			className={`transition duration-200 ${invertInDark ? 'dark:invert' : ''} ${styles}`}
		/>
	);
};

export default DefaultIcon;
