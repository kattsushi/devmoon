<script lang="ts">
	import { onMount } from 'svelte'

	type OwnProps = {
		size: 'sm' | 'base' | 'lg' | 'xl'
		background: 'none' | 'primary' | 'acent' | 'secondary' | 'warning' | 'surface'
		color: 'text-white' | 'text-black' | string
		iconPosition: 'left' | 'right'
		icon: string
		variant: 'filled' | 'ringed' | 'ghost'
	}

	type $$Props =
		| (svelteHTML.IntrinsicElements['button'] & OwnProps)
		| (svelteHTML.IntrinsicElements['a'] & OwnProps)

	import Icon from '../Icon/Icon.svelte'

	export let size: OwnProps['size'] = 'base'
	export let background: OwnProps['background'] = 'primary'
	export let color: OwnProps['color'] = 'text-white'
	export let iconPosition: OwnProps['iconPosition'] = 'left'
	export let icon: OwnProps['icon'] = undefined
	export let variant: OwnProps['variant'] = 'filled'
</script>

{#if $$restProps.href}
	<a
		{...$$restProps}
		href={$$restProps.href}
		class={`btn btn-${size} ${
			background === 'none' ? '' : `btn-${variant}-${background}`
		} ${color} ${$$restProps.class ?? ''}`}
	>
		{#if icon && iconPosition === 'left'}
			<Icon {icon} />
		{/if}
		<slot />
		{#if icon && iconPosition === 'left'}
			<Icon {icon} />
		{/if}
	</a>
{:else}
	<button
		{...$$restProps}
		class={`btn btn-${size} ${
			background === 'none' ? '' : `btn-${variant}-${background}`
		} ${color} ${$$restProps.class ?? ''}`}
	>
		{#if icon && iconPosition === 'left'}
			<Icon {icon} />
		{/if}
		<slot />
		{#if icon && iconPosition === 'left'}
			<Icon {icon} />
		{/if}
	</button>
{/if}
