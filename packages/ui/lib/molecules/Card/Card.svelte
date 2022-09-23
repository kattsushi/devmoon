<script lang="ts">
	import { Card } from '@brainandbones/skeleton'
	export let background: string = 'bg-base-100'
	// export let color: string = 'text-white';
	export let customClass: string = ''
	export let withShadow = false
	export let color = 'text-white'
</script>

<Card {background} {color} class={customClass}>
	<slot />
</Card>

<!-- <div class={`card w-full ${withShadow ? 'shadow-2xl' : ''} ${background} ${customClass}`}>
	<div class="card-body">
		<slot />
	</div>
</div> -->
<!-- 
<style>
	.card {
		pointer-events: auto;
	}
</style> -->
