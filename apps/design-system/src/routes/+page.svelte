<script>
	import { SITE_NAME, SITE_TITLE, SITE_SEPARATOR, SITE_DESCRIPTION } from '@devmoon/metadata'
	import { page } from '$app/stores'
	import { Button } from '@devmoon/components'
	// import DesignSystem from '$design-system/lib/DesignSystem.svelte'
</script>

<svelte:head>
	<title>{SITE_NAME} {SITE_SEPARATOR} {SITE_TITLE}</title>
	<meta name="description" content={SITE_DESCRIPTION} />

	<meta property="og:title" content="{SITE_NAME} {SITE_SEPARATOR} {SITE_TITLE}" />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head>

<!-- <DesignSystem id="design-system" /> -->
