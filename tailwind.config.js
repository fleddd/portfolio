/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#101010',
				white: '#fefefe',
				accent: '#0370ff',
			},
			dropShadow: {
				md: '0 0 5px #036fff',
				xl: '0 5px 20px #036fff',
			},
			boxShadow: {
				accentMd: '0 0 5px #036fff',
				accentXl: '0 0 5px #037fff',
			},
		},
	},
	plugins: [],
}
