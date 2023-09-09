const { withMaterialColors } = require('tailwind-material-colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},

	},
	plugins: [],
}


module.exports = withMaterialColors({
	// Here, your tailwind config.
	// (Do not specify theme.colors or theme.extend.colors as they will be overwritten).
}, {
	// Here, your base colors as HEX values
	// primary is required
	// secondary and/or tertiary are optional, if not set they will be derived from the primary color
	primary: '#ff0000',
	secondary: '#ffff00',
	tertiary: '#0000ff',
	// extra named colors may also be included
	green: '#00ff00'
	blue: '#0000ff'
});
