<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { swipe } from 'svelte-gestures'
	export let checked = false

	let innerWidth: number

	const dispatch = createEventDispatcher()

	function handleSwipe(e: any): void {
		if (e.detail.direction === 'right' && innerWidth < 640) {
			dispatch('toggleDrawer')
		}
	}
</script>

<svelte:window bind:innerWidth />
<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked />
	<div class="drawer-content flex h-full flex-col pl-0 pr-0 pb-0">
		<div class="mb-4 flex h-full flex-row">
			<div class="mt-2 ml-2 hidden h-full basis-2 sm:flex">
				<slot name="sidebar" />
			</div>
			<div
				class="basis-full"
				use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' }}
				on:swipe={handleSwipe}
			>
				<slot name="main-content" />
			</div>
		</div>
		<!-- Drawer -->
	</div>
	<slot name="drawer-side" />
</div>
