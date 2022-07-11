import { sveltekit } from '@sveltejs/kit/vite';

const moduleExclude = (match) => {
	const m = (id) => id.indexOf(match) > -1;
	return {
		name: `exclude-${match}`,
		resolveId(id) {
			if (m(id)) return id;
		},
		load(id) {
			if (m(id)) return `export default {}`;
		}
	};
};

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
			include: [
				'@devmoon-libs/ui',
				'@devmoon-dcollect-libs/store',
				'svelte-fa',
				'daisyui',
				'gun',
				'gun/gun',
				'gun/sea',
				'gun/sea.js',
				'gun/lib/then',
				'gun/lib/webrtc',
				'gun/lib/radix',
				'gun/lib/radisk',
				'gun/lib/store',
				'gun/lib/rindexed'
			]
		},
		plugins: [moduleExclude('text-encoding')]
	}
};

export default config;
