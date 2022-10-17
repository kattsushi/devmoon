<script lang="ts">
	// import '../../../../theme.css';
	import '../../../../app.css'
	import { page } from '$app/stores'
	import NodeList from '$lib/node/node-list.svelte'
	import { Divider } from '@devmoon/components'

	import { Modals, closeModal } from 'svelte-modals'

	let showDetail = false
	if (
		$page.routeId === 'admin/(admin)/nodes/[id]' ||
		$page.routeId === 'admin/(admin)/nodes/[id]'
	) {
		showDetail = true
	} else {
		showDetail = false
	}
</script>

<div class="bg-base-100 rounded-box ml-2 mr-2 mb-2 mt-2 flex h-full">
	<div class="ml-2 h-full w-full pt-1 sm:w-full md:w-1/4">
		<NodeList page={$page} />
	</div>
	<div class="hidden sm:flex">
		<Divider isHorizontal={false} />
	</div>
	{#if showDetail}
		<div class="rounded-box hidden h-full p-2 sm:inline-flex sm:w-4/5 md:w-4/5">
			<slot />
		</div>
	{/if}
</div>

<Modals>
	<div slot="backdrop" class="backdrop" on:click={closeModal} />
</Modals>

<style>
	.backdrop {
		z-index: 10;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}
</style>
