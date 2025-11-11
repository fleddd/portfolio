import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavButton } from "../../components/ui/buttons";

const ScrollHeader = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 65);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<AnimatePresence>
			{isScrolled && (
				<motion.nav
					transition={{ type: "spring", bounce: false, duration: 0.5 }}
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 10, opacity: 1 }}
					exit={{ y: -50, opacity: 0 }}
					className="
                        flex fixed top-0 left-0 inset-x-0 mx-auto z-20 
                        items-center justify-center py-2 px-3 sm:px-6 rounded-xl 
                        bg-white/30 dark:bg-black/30
                        backdrop-blur-[20px]
                        border border-white/20 dark:border-black/20
                        shadow-md
                        max-w-fit
                    "
				>


					<div className="relative z-10 flex justify-center gap-5  max-sm:text-xs">
						<NavButton text="Home" section={"greeting"} />
						<NavButton text="About" section={"about"} />
						<NavButton text="Skills" section={"skills"} />
						<NavButton text="Projects" section={"projects"} />
						<NavButton text="Contact" section={"contact"} />
					</div>
				</motion.nav>
			)}
		</AnimatePresence>
	);
};

export default ScrollHeader;