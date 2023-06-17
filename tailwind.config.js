/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
	],
	theme: {
		extend: {
			fontFamily: {
				figtree: ["Figtree", "sans-serif"]
			}
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#38bdf8',
					secondary: '#818cf8',
					accent: '#d946ef',
					neutral: '#CCCCCC',
					'base-100': '#24242e',
					info: '#0092d6',
					success: '#6cb288',
					warning: '#daad58',
					error: '#ab3d30',
				},
			},
			{
				light: {
					primary: '#38bdf8',
					secondary: '#818cf8',
					accent: '#d946ef',
					neutral: '#572d00',
					'base-100': '#faf7de',
					info: '#0092d6',
					success: '#6cb288',
					warning: '#daad58',
					error: '#ab3d30',
				},
			},
		],
	},
};
