const { withMaterialColors } = require('tailwind-material-colors');

/** @type {import('tailwindcss').Config} */
module.exports = withMaterialColors({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'fill': 'repeat(auto-fit, minmax(32ch, 1fr));',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			maxWidth: {
				'2xs': '18rem',
			  },
			  colors: {
				'gray': '#D3D3D3',
			  }
		}
	},
	plugins: [require('@tailwindcss/typography'),],
	// Here, your tailwind config.
	// (Do not specify theme.colors or theme.extend.colors as they will be overwritten).
}, {
	// Here, your base colors as HEX values
	// primary is required
	// secondary and/or tertiary are optional, if not set they will be derived from the primary color
	primary: '#405e0d',
	// primary: '#875300',
	w: '#fff',
});
