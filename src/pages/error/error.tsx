import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Error404 } from '../../components/ui/images'

const Error = () => {
	const [time, setTime] = useState(5)
	const navigate = useNavigate()

	useEffect(() => {
		if (time <= 0) {
			navigate('/', {
				replace: true,
			})
			return
		}
		const timer = setTimeout(() => {
			setTime(prev => prev - 1)
		}, 1000)

		return () => clearTimeout(timer)
	}, [time])
	return (
		<main className='w-full h-dvh flex flex-col justify-center items-center'>
			<div className='text-4xl'>
				<Error404 size={300} />
			</div>
			<div className='text-center space-y-2'>
				<h2 className='text-xl sm:text-2xl'>This page has never existed.</h2>
				<p className='text-sm sm:text-md'>
					You will be redirected in {time}... (or click{' '}
					<NavLink replace={true} className={'text-accent underline '} to='/'>
						here.
					</NavLink>
					)
				</p>
			</div>
		</main>
	)
}

export default Error
