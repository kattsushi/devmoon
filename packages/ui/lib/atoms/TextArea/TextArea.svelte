<script lang="ts">
	import type { IFieldAttributes } from '../../molecules'

	export let attributes: IFieldAttributes = {
		id: '',
		type: 'textarea'
	}
	export let value = ''
	export let name = ''
</script>

<textarea
	class={`textarea textarea-primary ${attributes.class.join(' ')}`}
	{name}
	id={attributes.id}
	bind:value
/>
