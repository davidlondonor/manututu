module.exports = {
	darkMode: ["class", '[data-mode="dark"]'],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		minHeight: {
			minHeight40: "50%",
			minWidthX: "2rem",
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
