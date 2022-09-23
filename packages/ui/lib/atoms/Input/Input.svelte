<script lang="ts">
	import { onMount } from 'svelte'

	export let attributes: any = {
		id: '',
		type: 'text'
	}
	export let value = ''
	export let name = ''
	export let error: boolean = true

	onMount(() => {})

	const ref = (node: HTMLInputElement) => {
		node.type = attributes.type
		if (attributes.type === 'number') {
			node.max = attributes['max']
			node.min = attributes['min']
		}
	}
</script>

<input
	id={attributes.id}
	{name}
	use:ref
	bind:value
	placeholder={attributes.placeholder}
	required={attributes.required}
	disabled={attributes.disabled}
	autocomplete={attributes.autocomplete}
	class:!input-error={error}
	class="placeholder-red-500"
/>
{#if attributes.type === 'checkbox'}
	<label class="relative -bottom-5" for={name}>{attributes.placeholder}</label>
{/if}
