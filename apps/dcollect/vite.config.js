import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	vite: {
		ssr: {
			noExternal: [
				'@devmoon-libs/ui',
				'@devmoon-dcollect-libs/store',
				'svelte-fa',
				'daisyui',
				'gun'
			]
		},
		optimizeDeps: {
			include: ['@devmoon-libs/ui', '@devmoon-dcollect-libs/store', 'svelte-fa', 'daisyui', 'gun']
		}
	}
};

export default config;
