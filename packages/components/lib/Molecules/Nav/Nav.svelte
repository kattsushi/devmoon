<script>
	import Link from '../../Atoms/Link/Link.svelte'

	export let menu = [
		{ label: 'features', href: '/' },
		{ label: 'docs', href: '/docs' }
		// { label: 'pricing', href: '/pricing'},
		// { label: 'tutorial', href: '/tutorial'},
		// { label: 'blog', href: '/blog'},
		// { label: 'FAQ', href: '/FAQ'},
	]

	let _class = ''
	export { _class as class }
</script>

<nav
	class="menu--active active flex flex-col items-center justify-center gap-6 capitalize md:flex-row {_class ||
		''}"
>
	{#each menu as link}
		<Link href={link.href} data-sveltekit-prefetch>
			{link.label}
		</Link>
	{/each}
</nav>
