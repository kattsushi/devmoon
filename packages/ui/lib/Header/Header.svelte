<script>
	import { fade, fly } from 'svelte/transition'
	import {
		screenH,
		scrollY,
		scrollDir,
		scrollUp,
		scrollDown,
		scrollTop,
		scrollBottom
	} from '../Device/device.js'
	import Device from '../Device/Device.svelte'
	import Container from '../Container/Container.svelte'
	let _class
	export { _class as class }

	export let headerHeight = null

	let _defaultClass = `rounded-full py-2 px-4 md:py-3 md:px-5`

	$: headerActive = $scrollY > headerHeight && $scrollUp
</script>

<!-- Active -->
{#if headerActive}
	<header
		in:fly={{ y: -(headerHeight * 2), opacity: 1 }}
		out:fly={{ y: -(headerHeight * 2), opacity: 1 }}
		bind:clientHeight={headerHeight}
		class="active header--active header fixed {_class || ''}"
		style="position: fixed"
	>
		{#if $$slots.left || $$slots.center || $$slots.right}
			<Container
				class="header-container bg--primary flex items-center justify-center {_defaultClass}"
			>
				<section class="relative flex flex-1 justify-start"><slot name="left" /></section>
				<section class="relative flex grow justify-center"><slot name="center" /></section>
				<section class="relative flex flex-1 justify-end"><slot name="right" /></section>
			</Container>
		{:else}
			<Container class="header-container">
				<slot />
			</Container>
		{/if}
	</header>

	<!-- Not Active -->
{:else}
	<header
		in:fade
		out:fade
		bind:clientHeight={headerHeight}
		class="header absolute {_class || ''}"
		style="position: absolute"
	>
		{#if $$slots.left || $$slots.center || $$slots.right}
			<Container class="header-container flex items-center justify-center {_defaultClass}">
				<section class="relative flex flex-1 justify-start"><slot name="left" /></section>
				<section class="relative flex grow justify-center"><slot name="center" /></section>
				<section class="relative flex flex-1 justify-end"><slot name="right" /></section>
			</Container>
		{:else}
			<Container class="header-container">
				<slot />
			</Container>
		{/if}
	</header>
{/if}

<style>
	header {
		width: 100%;
		left: 0;
		top: 0;
		right: 0;
		z-index: 10;
	}
</style>
