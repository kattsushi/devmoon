import { sveltekit } from '@sveltejs/kit/vite'
import { join } from 'path'
import { readFileSync } from 'fs'
import { cwd } from 'process'

const pkg = JSON.parse(readFileSync(join(cwd(), 'package.json')))

const moduleExclude = match => {
	const m = id => id.indexOf(match) > -1
	return {
		name: `exclude-${match}`,
		resolveId(id) {
			if (m(id)) return id
		},
		load(id) {
			if (m(id)) return `export default {}`
		}
	}
}

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	vite: {
		ssr: {
			noExternal: [
				'@fortawesome/fontawesome-svg-core',
				'svelte-fa',
				'daisyui',
				'gun',
				'svelte-viewport-info'
			]
		},
		optimizeDeps: {
			include: [
				'@fortawesome/fontawesome-svg-core',
				'svelte-fa',
				'gun',
				'svelte-viewport-info',
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
}
// if (process.env.NODE_ENV === "production") config.resolve.preserveSymlinks = true;

export default config
