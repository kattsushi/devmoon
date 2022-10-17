<script lang="ts">
	type OwnProps = {
		error: boolean
	}
	type $$Props = svelteHTML.IntrinsicElements['input'] & OwnProps

	export let error: OwnProps['error'] = false
	export let value = ''

	const ref = (node: HTMLInputElement) => {
		node.type = $$restProps.type
		if ($$restProps.type === 'number') {
			node.max = $$restProps['max']
			node.min = $$restProps['min']
		}
	}
</script>

<input {...$$restProps} use:ref bind:value class:!input-error={error} />
{#if $$restProps.type === 'checkbox'}
	<label class="relative -bottom-5" for={$$restProps.name}>{$$restProps.placeholder}</label>
{/if}
