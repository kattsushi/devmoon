<script>
	import Section from '../Section/Section.svelte'
	import Container from '../Container/Container.svelte'
	import Content from '../Content/Content.svelte'
	import Title from '../Title/Title.svelte'
	import Button from '../Button/Button.svelte'

	function pressMe() {
		alert('that was pressing')
	}
</script>

<!-- Buttons -->
<Section class="flex flex-col items-center justify-center pt-56">
	<Title subtitle="Buttons" />

	<Container class="flex items-start justify-center gap-10">
		<!-- button -->
		<section class="flex flex-1 flex-col items-center gap-4">
			<h3 class="text--primary mb-4 text-xl font-black">Button (type)</h3>
			<Button on:click={pressMe}>default</Button>
			<Button on:click={pressMe} button="filled">filled</Button>
			<Button on:click={pressMe} button="outline">outline</Button>
			<Button on:click={pressMe} button="text">text</Button>
		</section>

		<!-- display -->
		<section class="flex flex-1 flex-col items-center gap-4">
			<h3 class="text--primary mb-4 text-xl font-black">display</h3>
			<Button on:click={pressMe} display="compact">compact</Button>
			<Button on:click={pressMe} display="normal">normal</Button>
			<Button on:click={pressMe} display="hero">hero</Button>
		</section>

		<!-- icon -->
		<section class="flex flex-1 flex-col items-center gap-4">
			<h3 class="text--primary mb-4 text-xl font-black">icon</h3>
			<Button on:click={pressMe} icon="arrow-left" position="left" box="0 0 20 20" size="24"
				>Back</Button
			>
			<Button
				on:click={pressMe}
				button="outline"
				icon="arrow-right"
				position="right"
				box="0 0 20 20"
				size="24">Next</Button
			>

			<div class="flex gap-4">
				<Button on:click={pressMe} button="icon" icon="btc" box="0 0 32 32" size="48" />
				<Button on:click={pressMe} button="icon" icon="discord" box="0 0 28 28" size="48" />
				<Button on:click={pressMe} button="icon" icon="check" box="0 0 20 20" size="48" />
			</div>
			<Button href="https://bybit.com" target="_blank" button="icon" icon="bybit" size="180" />
		</section>
	</Container>
</Section>

<Section class="flex flex-col items-center justify-center pt-56">
	<Title subtitle="Double Dash Classes" />

	<!-- Double Dash Classes -->
	<Container class="flex items-start justify-center gap-10">
		<!-- bg -->
		<section class="flex flex-col items-start">
			<h3 class="mb-4 text-xl font-black text-black">.bg</h3>

			<div class="bg--brand w-56 text-black/30 dark:text-white/30">bg--brand</div>
			<div class="bg--primary w-56 text-black/30 dark:text-white/30">bg--primary</div>
			<div class="bg--secondary w-56 text-black/30 dark:text-white/30">bg--secondary</div>
			<div class="bg--dim w-56 text-black/30 dark:text-white/30">bg--dim</div>
			<div class="bg--neutral w-56 text-black/30 dark:text-white/30">bg--neutral</div>
		</section>

		<!-- text -->
		<section class="flex flex-col items-start">
			<h3 class="mb-4 text-xl font-black text-black">.text</h3>

			<div class="text--brand">text--brand</div>
			<div class="text--primary w-56">text--primary</div>
			<div class="text--secondary w-56">text--secondary</div>
			<div class="text--dim w-56">text--dim</div>
			<div class="text--neutral w-56">text--neutral</div>
			<div class="text--disabled w-56">text--disabled</div>
		</section>
	</Container>
</Section>

<!-- Tailwind Generated Classes -->
<Section class="flex flex-col items-center justify-center">
	<Title subtitle="Tailwind Generated Classes" />

	<Container class="flex items-start justify-center">
		<!-- Lite Mode 
    ////////////////////////////////////////////////////////////////// -->
		<section class="flex flex-col items-start justify-start bg-white p-10">
			<h3 class="text-xl font-black text-black">.bg-brand</h3>

			<!-- brand -->
			<div class="bg-brand-primary mt-4 w-56 text-white">bg-brand-primary</div>
			<div class="bg-brand-secondary w-56 text-white">bg-brand-secondary</div>

			<h3 class="mt-4 text-xl font-black text-black">.bg-brand-primary</h3>
			<div class="bg-brand-primary-1 mt-4 w-56 text-white">bg-brand-primary-1</div>
			<div class="bg-brand-primary-2 w-56 text-white">bg-brand-primary-2</div>
			<div class="bg-brand-primary-3 w-56 text-white">bg-brand-primary-3</div>
			<div class="bg-brand-primary-4 w-56 text-white">bg-brand-primary-4</div>
			<div class="bg-brand-primary-5 w-56 text-white">bg-brand-primary-5</div>
			<div class="bg-brand-primary-6 w-56 text-white">bg-brand-primary-6</div>
			<div class="bg-brand-primary-7 w-56 text-white">bg-brand-primary-7</div>
			<div class="bg-brand-primary-8 w-56 text-white">bg-brand-primary-8</div>
			<div class="bg-brand-primary-9 w-56 text-white">bg-brand-primary-9</div>

			<h3 class="mt-4 text-xl font-black text-black">.bg-brand-primary</h3>
			<div class="bg-brand-secondary-1 mt-4 w-56 text-white">bg-brand-secondary-1</div>
			<div class="bg-brand-secondary-2 w-56 text-white">bg-brand-secondary-2</div>
			<div class="bg-brand-secondary-3 w-56 text-white">bg-brand-secondary-3</div>
			<div class="bg-brand-secondary-4 w-56 text-white">bg-brand-secondary-4</div>
			<div class="bg-brand-secondary-5 w-56 text-white">bg-brand-secondary-5</div>
			<div class="bg-brand-secondary-6 w-56 text-white">bg-brand-secondary-6</div>
			<div class="bg-brand-secondary-7 w-56 text-white">bg-brand-secondary-7</div>
			<div class="bg-brand-secondary-8 w-56 text-white">bg-brand-secondary-8</div>
			<div class="bg-brand-secondary-9 w-56 text-white">bg-brand-secondary-9</div>

			<h3 class="mt-4 text-xl font-black text-black">.bg-lite</h3>

			<!-- name -->
			<div class="bg-lite mt-4 w-56 text-black">bg-lite</div>
			<div class="bg-lite-primary w-56 text-black">bg-lite-primary</div>
			<div class="bg-lite-secondary w-56 text-black">bg-lite-secondary</div>
			<div class="bg-lite-dim w-56 text-black">bg-lite-dim</div>

			<!-- grade -->
			<div class="bg-lite-1 mt-4 w-56 text-black">bg-lite-1</div>
			<div class="bg-lite-2 w-56 text-black">bg-lite-2</div>
			<div class="bg-lite-3 w-56 text-black">bg-lite-3</div>
			<div class="bg-lite-4 w-56 text-black">bg-lite-4</div>
			<div class="bg-lite-5 w-56 text-black">bg-lite-5</div>
			<div class="bg-lite-6 w-56 text-black">bg-lite-6</div>
			<div class="bg-lite-7 w-56 text-black">bg-lite-7</div>
			<div class="bg-lite-8 w-56 text-black">bg-lite-8</div>
			<div class="bg-lite-9 w-56 text-black">bg-lite-9</div>
		</section>

		<section class="flex flex-col items-start justify-start bg-white p-10">
			<h3 class="text-xl font-black text-black">.text-brand</h3>

			<!-- brand -->
			<div class="text-brand-primary mt-4 w-56">text-brand-primary</div>
			<div class="text-brand-secondary w-56">text-brand-secondary</div>

			<h3 class="mt-4 text-xl font-black text-black">.text-brand-primary</h3>
			<div class="text-brand-primary-1 mt-4 w-56">text-brand-primary-1</div>
			<div class="text-brand-primary-2 w-56">text-brand-primary-2</div>
			<div class="text-brand-primary-3 w-56">text-brand-primary-3</div>
			<div class="text-brand-primary-4 w-56">text-brand-primary-4</div>
			<div class="text-brand-primary-5 w-56">text-brand-primary-5</div>
			<div class="text-brand-primary-6 w-56">text-brand-primary-6</div>
			<div class="text-brand-primary-7 w-56">text-brand-primary-7</div>
			<div class="text-brand-primary-8 w-56">text-brand-primary-8</div>
			<div class="text-brand-primary-9 w-56">text-brand-primary-9</div>

			<h3 class="mt-4 text-xl font-black text-black">.text-brand-primary</h3>
			<div class="text-brand-secondary-1 mt-4 w-56">text-brand-secondary-1</div>
			<div class="text-brand-secondary-2 w-56">text-brand-secondary-2</div>
			<div class="text-brand-secondary-3 w-56">text-brand-secondary-3</div>
			<div class="text-brand-secondary-4 w-56">text-brand-secondary-4</div>
			<div class="text-brand-secondary-5 w-56">text-brand-secondary-5</div>
			<div class="text-brand-secondary-6 w-56">text-brand-secondary-6</div>
			<div class="text-brand-secondary-7 w-56">text-brand-secondary-7</div>
			<div class="text-brand-secondary-8 w-56">text-brand-secondary-8</div>
			<div class="text-brand-secondary-9 w-56">text-brand-secondary-9</div>

			<h3 class="mt-4 text-xl font-black text-black">.text-dark</h3>

			<!-- name -->
			<div class="text-dark mt-4 w-56">text-dark</div>
			<div class="text-dark-primary w-56">text-dark-primary</div>
			<div class="text-dark-secondary w-56">text-dark-secondary</div>
			<div class="text-dark-dim w-56">text-dark-dim</div>

			<!-- grade -->
			<div class="text-dark-1 mt-4 w-56">text-dark-1</div>
			<div class="text-dark-2 w-56">text-dark-2</div>
			<div class="text-dark-3 w-56">text-dark-3</div>
			<div class="text-dark-4 w-56">text-dark-4</div>
			<div class="text-dark-5 w-56">text-dark-5</div>
			<div class="text-dark-6 w-56">text-dark-6</div>
			<div class="text-dark-7 w-56">text-dark-7</div>
			<div class="text-dark-8 w-56">text-dark-8</div>
			<div class="text-dark-9 w-56">text-dark-9</div>
		</section>

		<!-- Dark Mode 
    ////////////////////////////////////////////////////////////////// -->
		<section class="flex flex-col items-start bg-black p-10">
			<h3 class="text-xl font-black text-white">.bg-brand</h3>

			<!-- brand -->
			<div class="bg-brand-primary mt-4 w-56 text-white">bg-brand-primary</div>
			<div class="bg-brand-secondary w-56 text-white">bg-brand-secondary</div>

			<h3 class="mt-4 text-xl font-black text-white">.bg-brand-primary</h3>
			<div class="bg-brand-primary-1 mt-4 w-56 text-white">bg-brand-primary-1</div>
			<div class="bg-brand-primary-2 w-56 text-white">bg-brand-primary-2</div>
			<div class="bg-brand-primary-3 w-56 text-white">bg-brand-primary-3</div>
			<div class="bg-brand-primary-4 w-56 text-white">bg-brand-primary-4</div>
			<div class="bg-brand-primary-5 w-56 text-white">bg-brand-primary-5</div>
			<div class="bg-brand-primary-6 w-56 text-white">bg-brand-primary-6</div>
			<div class="bg-brand-primary-7 w-56 text-white">bg-brand-primary-7</div>
			<div class="bg-brand-primary-8 w-56 text-white">bg-brand-primary-8</div>
			<div class="bg-brand-primary-9 w-56 text-white">bg-brand-primary-9</div>

			<h3 class="mt-4 text-xl font-black text-white">.bg-brand-secondary</h3>
			<div class="bg-brand-secondary-1 mt-4 w-56 text-white">bg-brand-secondary-1</div>
			<div class="bg-brand-secondary-2 w-56 text-white">bg-brand-secondary-2</div>
			<div class="bg-brand-secondary-3 w-56 text-white">bg-brand-secondary-3</div>
			<div class="bg-brand-secondary-4 w-56 text-white">bg-brand-secondary-4</div>
			<div class="bg-brand-secondary-5 w-56 text-white">bg-brand-secondary-5</div>
			<div class="bg-brand-secondary-6 w-56 text-white">bg-brand-secondary-6</div>
			<div class="bg-brand-secondary-7 w-56 text-white">bg-brand-secondary-7</div>
			<div class="bg-brand-secondary-8 w-56 text-white">bg-brand-secondary-8</div>
			<div class="bg-brand-secondary-9 w-56 text-white">bg-brand-secondary-9</div>

			<h3 class="mt-4 text-xl font-black text-white">.bg-dark</h3>

			<!-- name -->
			<div class="bg-dark mt-4 w-56 text-white">bg-dark</div>
			<div class="bg-dark-primary w-56 text-white">bg-dark-primary</div>
			<div class="bg-dark-secondary w-56 text-white">bg-dark-secondary</div>
			<div class="bg-dark-dim w-56 text-white">bg-dark-dim</div>

			<!-- grade -->
			<div class="bg-dark-1 mt-4 w-56 text-white">bg-dark-1</div>
			<div class="bg-dark-2 w-56 text-white">bg-dark-2</div>
			<div class="bg-dark-3 w-56 text-white">bg-dark-3</div>
			<div class="bg-dark-4 w-56 text-white">bg-dark-4</div>
			<div class="bg-dark-5 w-56 text-white">bg-dark-5</div>
			<div class="bg-dark-6 w-56 text-white">bg-dark-6</div>
			<div class="bg-dark-7 w-56 text-white">bg-dark-7</div>
			<div class="bg-dark-8 w-56 text-white">bg-dark-8</div>
			<div class="bg-dark-9 w-56 text-white">bg-dark-9</div>
		</section>

		<section class="flex flex-col items-start justify-start bg-black p-10">
			<h3 class="text-xl font-black text-white">.text-brand</h3>

			<!-- brand -->
			<div class="text-brand-primary mt-4 w-56">text-brand-primary</div>
			<div class="text-brand-secondary w-56">text-brand-secondary</div>

			<h3 class="mt-4 text-xl font-black text-white">.text-primary</h3>

			<div class="text-brand-primary-1 mt-4 w-56">text-brand-primary-1</div>
			<div class="text-brand-primary-2 w-56">text-brand-primary-2</div>
			<div class="text-brand-primary-3 w-56">text-brand-primary-3</div>
			<div class="text-brand-primary-4 w-56">text-brand-primary-4</div>
			<div class="text-brand-primary-5 w-56">text-brand-primary-5</div>
			<div class="text-brand-primary-6 w-56">text-brand-primary-6</div>
			<div class="text-brand-primary-7 w-56">text-brand-primary-7</div>
			<div class="text-brand-primary-8 w-56">text-brand-primary-8</div>
			<div class="text-brand-primary-9 w-56">text-brand-primary-9</div>

			<h3 class="mt-4 text-xl font-black text-white">.text-secondary</h3>

			<div class="text-brand-secondary-1 mt-4 w-56">text-brand-secondary-1</div>
			<div class="text-brand-secondary-2 w-56">text-brand-secondary-2</div>
			<div class="text-brand-secondary-3 w-56">text-brand-secondary-3</div>
			<div class="text-brand-secondary-4 w-56">text-brand-secondary-4</div>
			<div class="text-brand-secondary-5 w-56">text-brand-secondary-5</div>
			<div class="text-brand-secondary-6 w-56">text-brand-secondary-6</div>
			<div class="text-brand-secondary-7 w-56">text-brand-secondary-7</div>
			<div class="text-brand-secondary-8 w-56">text-brand-secondary-8</div>
			<div class="text-brand-secondary-9 w-56">text-brand-secondary-9</div>

			<h3 class="mt-4 text-xl font-black text-white">.text-lite</h3>

			<!-- name -->
			<div class="text-lite mt-4 w-56">text-lite</div>
			<div class="text-lite-primary w-56">text-lite-primary</div>
			<div class="text-lite-secondary w-56">text-lite-secondary</div>
			<div class="text-lite-dim w-56">text-lite-dim</div>

			<!-- grade -->
			<div class="text-lite-1 mt-4 w-56">text-lite-1</div>
			<div class="text-lite-2 w-56">text-lite-2</div>
			<div class="text-lite-3 w-56">text-lite-3</div>
			<div class="text-lite-4 w-56">text-lite-4</div>
			<div class="text-lite-5 w-56">text-lite-5</div>
			<div class="text-lite-6 w-56">text-lite-6</div>
			<div class="text-lite-7 w-56">text-lite-7</div>
			<div class="text-lite-8 w-56">text-lite-8</div>
			<div class="text-lite-9 w-56">text-lite-9</div>
		</section>
	</Container>
</Section>
