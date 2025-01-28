import { TIcon } from '../../../../types/icons'
import image from '../svg/404.svg'
const Error404 = ({ size, styles }: TIcon) => {
	return (
		<img
			src={image}
			height={size}
			width={size}
			className={styles}
			alt='Error icon'
		/>
	)
}

export default Error404
