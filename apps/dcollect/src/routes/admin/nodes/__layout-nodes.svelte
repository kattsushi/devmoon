<script lang="ts">
	import { page } from '$app/stores';
	import NodeList from '$lib/node/node-list.svelte';
	import { Divider } from '@devmoon-libs/ui';
	let showDetail = false;
	if ($page.routeId === 'admin/nodes/[id]@nodes' || $page.routeId === 'admin/nodes@nodes') {
		showDetail = true;
	} else {
		showDetail = false;
	}
</script>

<div class="flex bg-base-100 rounded-box ml-2 h-full">
	<div class="w-1/5 p-2 pt-4  ml-2 h-full">
		<NodeList page={$page} />
	</div>
	<Divider isHorizontal={false} />
	{#if showDetail}
		<div class="w-4/5 p-2 rounded-box h-full">
			<slot />
		</div>
	{/if}
</div>
