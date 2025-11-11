import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize theme before React renders to avoid FOUC
(() => {
	try {
		const stored = localStorage.getItem('theme');
		const prefersDark = window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches;
		const shouldBeDark = stored ? stored === 'dark' : prefersDark;
		const root = document.documentElement;
		if (shouldBeDark) {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
	} catch {
		// no-op
	}
})();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
