import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../views/layout/layout";

const routes = createBrowserRouter(
	[
		{
			element: <Layout />,
			path: "/",
		},
	],
	{
		basename: "/portfolio",
	},
);

export const AppRouter = () => {
	return <RouterProvider router={routes} />;
};
