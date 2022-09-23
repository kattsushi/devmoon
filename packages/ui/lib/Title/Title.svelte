<script>
	/* Default Props
	 *************************/
	let _class
	export { _class as class }
	export let title
	export let subtitle
	export let subheader
	export let subheading
	export let tagline

	/* Private Variables
	 *************************/
	let defaultClass = `w-full not-prose`
</script>

<div class="{defaultClass} {!subheader || !subheading ? 'my-20' : ''} {_class || ''}">
	{#if title || subtitle || subheader || subheading || tagline}
		<!-- Title -->
		{#if title}
			<h1
				class="text--primary text-center text-6xl font-black tracking-tight md:text-[14vw] lg:text-[12vw] xl:text-[8vw]"
			>
				{title}
			</h1>
		{/if}

		<!-- Subtitle -->
		{#if subtitle}
			<h2 class="text--primary text-center text-4xl font-extrabold tracking-tight md:text-6xl">
				{subtitle}
			</h2>
		{/if}

		<!-- Subtitle -->
		{#if subheader || subheading}
			<h3 class="text--primary text-3xl font-medium tracking-tight">
				{subheader || subheading}
			</h3>
		{/if}

		<!-- Tagline -->
		{#if tagline}
			<p
				class={`mt-4 text-lg font-medium text--neutral md:text-xl text-center ${
					$$props.class || ''
				}`}
				style={`${$$props.style || ''}`}
			>
				{tagline}
			</p>
		{/if}
	{:else}
		<h2 class="text--primary text-center text-4xl font-extrabold tracking-tight md:text-6xl">
			<slot />
		</h2>
	{/if}
</div>
