import { resolve } from 'path'
import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		serviceWorker: {
			register: false
		},
		alias: {
			// Root
			$root: resolve('../../'),

			// App (main)
			$dcollect: resolve('../../apps/dcollect/src')
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
}

export default config
