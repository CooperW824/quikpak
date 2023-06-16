// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
	alias: {
		'./runtimeConfig': './runtimeConfig.browser',
	},
	vite: {
		define: {
			'window.global': {},
		},
	},	
});
