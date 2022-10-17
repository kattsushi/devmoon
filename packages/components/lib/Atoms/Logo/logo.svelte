<script lang="ts">
	import Icon from '../Icon/Icon.svelte'
	import empire from 'svelte-awesome/icons/empire'

	export let logo: string = undefined
</script>

<div class="mb-4 mt-5 text-center">
	<Icon icon={empire} />
	{#if logo}
		{logo}
	{/if}
</div>
