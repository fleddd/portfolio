import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NavButton } from "../../components/ui/buttons";
type TBurgerMenu = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const BurgerMenu: React.FC<TBurgerMenu> = ({ isOpen = false, setIsOpen }) => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const toggleMenu = () => setIsOpen((prev) => !prev);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 640) setIsOpen(false);
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	useEffect(() => {
		if (isOpen) {
			setScrollPosition(window.pageYOffset);

			document.body.style.position = "fixed";
			document.body.style.top = `-${scrollPosition}px`;
			document.body.style.width = "100%";
		} else {
			document.body.style.position = "";
			document.body.style.top = "";
			document.body.style.width = "";

			window.scrollTo(0, scrollPosition);
		}

		return () => {
			document.body.style.position = "";
			document.body.style.top = "";
			document.body.style.width = "";
		};
	}, [isOpen, scrollPosition]);

	return (
		<motion.div
			initial={false}
			animate={isOpen ? "opened" : "closed"}
			transition={{ bounce: false, ease: "easeInOut" }}
			variants={{
				opened: {
					x: 0,
				},
				closed: {
					x: "-100%",
				},
			}}
			className="min-w-dvw z-9 fixed left-0 top-0 flex h-dvh w-dvw justify-center bg-zinc-950 pt-24 text-white"
		>
			<div className="flex w-64 grow flex-col gap-5 px-12 text-start text-xl">
				<NavButton onClick={toggleMenu} text="Home" section={"greeting"} />
				<NavButton onClick={toggleMenu} text="About" section={"about"} />
				<NavButton onClick={toggleMenu} text="Projects" section={"projects"} />
				<NavButton onClick={toggleMenu} text="Skills" section={"skills"} />
				<NavButton onClick={toggleMenu} text="Contact" section={"contact"} />
			</div>
		</motion.div>
	);
};

export default BurgerMenu;
