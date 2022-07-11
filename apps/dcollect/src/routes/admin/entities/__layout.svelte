<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	console.log('page', $page);
	let showDetail = false;
	onMount(() => {
		if ($page.routeId === 'admin/entities/[id]') {
			showDetail = true;
		} else {
			showDetail = false;
		}
	});
</script>

<div class="columns-2 h-full">
	<div class="w-80 h-full">
		<slot />
	</div>
	{#if showDetail}
		<div class="w-auto h-full">
			<slot />
		</div>
	{/if}
</div>
