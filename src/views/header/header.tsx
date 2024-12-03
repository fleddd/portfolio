import { useState } from "react";
import BurgerMenu from "./burgerMenu";
import BurgerToggler from "./BurgerToggler";
import Navigation from "./headerNavigation";

const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggle = () => setIsOpen((prev) => !prev);

	return (
		<header className="w-full flex justify-between items-center  gap-10 py-5 px-10  bg-[#fefefe] shadow-md">
			<h2 className="text-xl">Oleh Fedkiv</h2>
			<Navigation />
			<BurgerToggler toggle={toggle} isOpen={isOpen} />
			<BurgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
		</header>
	);
};

export default Header;
