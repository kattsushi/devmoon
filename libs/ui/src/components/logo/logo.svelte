<script lang="ts">
	import Icon from '../icon/icon.svelte';
	import empire from 'svelte-awesome/icons/empire';

	export let logo: string = undefined;
</script>

<div class="text-center mb-4 mt-5">
	<Icon icon={empire} />
	{#if logo}
		{logo}
	{/if}
</div>
