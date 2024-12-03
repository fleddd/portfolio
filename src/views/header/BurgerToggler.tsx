type TMenuToggle = {
	toggle: () => void
	isOpen: boolean
}

const BurgerToggler = ({ toggle, isOpen = false }: TMenuToggle) => (
	<button className='sm:hidden static z-10' onClick={toggle}>
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
			<g
				id='SVGRepo_tracerCarrier'
				stroke-linecap='round'
				stroke-linejoin='round'
			></g>
			<g id='SVGRepo_iconCarrier'> </g>
			<path
				d='M4 18L20 18'
				stroke={isOpen ? '#ffffff' : '#000000'}
				stroke-width='2'
				stroke-linecap='round'
			></path>{' '}
			<path
				d='M4 12L20 12'
				stroke={isOpen ? '#ffffff' : '#000000'}
				stroke-width='2'
				stroke-linecap='round'
			></path>{' '}
			<path
				d='M4 6L20 6'
				stroke={isOpen ? '#ffffff' : '#000000'}
				stroke-width='2'
				stroke-linecap='round'
			></path>{' '}
		</svg>
	</button>
)
export default BurgerToggler
