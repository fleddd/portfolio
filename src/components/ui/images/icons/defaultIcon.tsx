import { TIcon } from '../../../../types/icons'

interface DefaultIcon extends TIcon {
	image: string
}

const DefaultIcon = ({ size, styles, image }: DefaultIcon) => {
	return (
		<img src={image} alt='icon' height={size} width={size} className={styles} />
	)
}

export default DefaultIcon
