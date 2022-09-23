<script>
	import { Logo, Nav } from '../../index'
	import { fade, fly, scale } from 'svelte/transition'

	let _class = null
	export { _class as class }

	let navOpen = false
	let html = document.documentElement

	function toggleNav() {
		navOpen = !navOpen
		html.style.overflow = 'hidden'
		html.classList.add('nav-open')
	}

	function closeNav() {
		navOpen = false
		html.removeAttribute('style')
		html.classList.remove('nav-open')
	}

	function handleKeydown(event) {
		if (event.keyCode === 27) {
			closeNav()
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<button
	on:click={toggleNav}
	class="{_class || ''} relative z-10 flex h-9 w-9 items-center justify-center"
	aria-label="Menu Button"
	aria-live="polite"
>
	<img
		class="headerActive:invert dark:headerActive:invert-0 absolute dark:invert"
		src="images/icons/menu-2.svg"
		alt="Menu Buton"
	/>
</button>

{#if navOpen}
	<div
		in:fade
		out:fade
		on:click={closeNav}
		class="active mobile-nav fixed inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-10 bg-white dark:bg-black"
	>
		<button
			on:click={closeNav}
			class="{_class || ''} absolute right-10 top-6 z-10 flex h-9 w-9 items-center justify-center"
			aria-label="Close Button"
			aria-live="polite"
		>
			<img class="absolute dark:invert" src="images/icons/close.svg" alt="Close Buton" />
		</button>
		<section in:fly={{ x: 40, delay: 120 }}>
			<Logo class="headerActive h-20" />
		</section>
		<section in:fly={{ x: -40, delay: 120 }}>
			<Nav />
		</section>
	</div>
{/if}
