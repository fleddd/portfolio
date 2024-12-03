import { createBrowserRouter } from 'react-router-dom'
import Layout from '../views/layout/layout'

export const routes = createBrowserRouter([
	{
		element: <Layout />,
		path: '/portfolio',
	},
])
