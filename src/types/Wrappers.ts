import { ReactNode } from "react";

export interface IChildrenWrapper {
	children?: ReactNode;
	onClick?: () => void;
	styles?: string;
}
