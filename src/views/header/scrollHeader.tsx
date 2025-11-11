import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavButton } from "../../components/ui/buttons";

const ScrollHeader = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop ||
				0;

			setIsScrolled(scrollTop > 40);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<AnimatePresence>
			{isScrolled && (
				<motion.nav
					transition={{ type: "spring", bounce: 0, duration: 0.5 }}
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -50, opacity: 0 }}
					className="
						fixed top-2 left-1/2 -translate-x-1/2 z-50
						flex items-center justify-center gap-5 
						py-2 px-4 sm:px-6 rounded-xl
						bg-white/30 dark:bg-black/30
						backdrop-blur-[20px]
						border border-white/20 dark:border-black/20
						shadow-md
						max-w-[90%] sm:max-w-[400px]
					"
				>
					<div className="flex justify-center gap-4 sm:gap-5 text-sm sm:text-base">
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
