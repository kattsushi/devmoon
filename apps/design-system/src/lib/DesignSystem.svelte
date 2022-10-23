<script>
	import { SITE_NAME, SITE_DESCRIPTION } from '@devmoon/metadata'
	import { Section, Container, Content, Button } from '@devmoon/components'
	import TextAnimate from './TextAnimate.svelte'
</script>

<Section class="h-screen pt-20 md:pt-32 md:pb-[10vh]" {...$$restProps}>
	<Container class="h-full bg-blue-500/0">
		<Content class="flex h-full flex-col justify-around">
			<h1 class="sr-only text-4xl font-bold text-black dark:text-white">{SITE_NAME}</h1>

			<h3
				class="grid select-none items-center justify-center text-center text-6xl font-black tracking-tight md:text-[14vw] lg:text-[12vw] xl:text-[8vw]"
			>
				<span class="-mb-6">The</span>
				<TextAnimate class="py-6">DesignSystem</TextAnimate>
				<span class="-mt-6">Page</span>
			</h3>

			<h2
				class="text--secondary text-center text-base font-medium tracking-wide md:mt-10 md:text-2xl"
			>
				{SITE_DESCRIPTION}
			</h2>

			<div class="flex flex-col items-center justify-center gap-4 md:flex-row">
				<Button href="https://scavengerbot.io" display="hero">Learn More</Button>
				<Button href="https://scavengerbot.io" button="outline" display="hero">Sign Up</Button>
			</div>
		</Content>
	</Container>
</Section>
