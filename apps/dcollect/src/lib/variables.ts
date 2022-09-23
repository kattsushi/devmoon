export const variables = {
	gun: {
		relayPeer: import.meta.env.VITE_GUN_RELAY_SERVER_URL || 'https://gun.vite.net',
		token: import.meta.env.VITE_GUN_TOKEN,
		pair: {
			pub: import.meta.env.VITE_GUN_PUB_KEY,
			priv: import.meta.env.VITE_GUN_PRIV_KEY,
			epub: import.meta.env.VITE_GUN_EPUB_KEY,
			epriv: import.meta.env.VITE_GUN_EPRIV_KEY
		}
	}
}
