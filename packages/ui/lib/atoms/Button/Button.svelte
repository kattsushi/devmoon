<script lang="ts">
	import { Button } from '@brainandbones/skeleton'
	import Icon from './../Icon/Icon.svelte'

	export let icon: string = undefined
	export let size: 'none' | 'sm' | 'base' | 'lg' | 'xl' = 'base'
	export let variant: 'text' | 'filled' | 'ring' | 'ghost' | 'ring-warning' | 'ring-primary' =
		'filled'
	export let background: string = 'bg-primary-500'
	export let ring: string = 'ring-transparent'
	export let color: string = 'text-white'
	export let weight: string = 'ring-none'
	export let rounded: string = 'rounded-lg'
	export let width: string = 'w-auto'
	export let customClass: string = ''
	export let disabled: boolean = false
	export let type = 'button'
</script>

<Button
	class={customClass}
	{size}
	{background}
	{color}
	{ring}
	{weight}
	{rounded}
	{width}
	{disabled}
	{type}
	{variant}
>
	<svelte:fragment slot="lead">
		{#if icon}
			<Icon {icon} />
		{/if}
	</svelte:fragment>
	<slot />
</Button>
