<script lang="ts">
	import { Button } from '@brainandbones/skeleton'
	import Icon from './../icon/icon.svelte'

	export let label: string
	export let icon: string = undefined
	export let size: 'none' | 'sm' | 'base' | 'lg' | 'xl' = 'base'
	export let variant: 'text' | 'filled' | 'ring' | 'ghost' = 'filled'
	export let background: string = 'primary'
	export let ring: string = 'primary'
	export let color: string = 'white'
	export let weight: string = 'normal'
	export let rounded: string = 'none'
	export let width: string = 'auto'
	export let customClass: string = ''
	export let disabled: boolean = false
</script>

<Button
	{variant}
	{size}
	{background}
	{color}
	{ring}
	{weight}
	{rounded}
	{width}
	{disabled}
	class={customClass}
>
	<svelte:fragment slot="lead">
		{#if icon}
			<Icon {icon} />
		{/if}
	</svelte:fragment>
	{label}
</Button>
