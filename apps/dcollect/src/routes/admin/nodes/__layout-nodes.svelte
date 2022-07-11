<script lang="ts">
	import { page } from '$app/stores';
	import NodeList from '$lib/node/node-list.svelte';
	import Divider from '@devmoon-libs/ui/src/components/atoms/divider/divider.svelte';
	import { onMount } from 'svelte';
	let showDetail = false;
	// onMount(() => {
	console.log('$page.routeId', $page.routeId);
	if ($page.routeId === 'admin/nodes/[id]@nodes' || $page.routeId === 'admin/nodes@nodes') {
		showDetail = true;
	} else {
		showDetail = false;
	}
	// });
</script>

<div class="flex h-full">
	<div class="w-1/5 bg-base-100 p-2 pt-4 rounded-box ml-2 h-full">
		<NodeList page={$page} />
	</div>
	<Divider isHorizontal={false} />
	{#if showDetail}
		<div class="w-4/5  rounded-box h-full">
			<slot />
		</div>
	{/if}
</div>
