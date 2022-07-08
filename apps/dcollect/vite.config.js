import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	vite: {
		ssr: {
			noExternal: '@devmoon-libs/ui'
		},
		optimizeDeps: {
			include: ['@devmoon-libs/ui']
		}
	}
};

export default config;
