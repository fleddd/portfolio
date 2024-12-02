import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/error/error";
import Layout from "../views/layout/layout";

export const routes = createBrowserRouter([
	{
		element: <Layout />,
		path: "/",
	},
	{
		element: <Error />,
		path: "*",
	},
]);
