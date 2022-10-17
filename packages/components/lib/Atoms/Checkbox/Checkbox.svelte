<script lang="ts">
	import type { IFieldAttributes } from '../../molecules/ReactiveForm/ReactiveForm.types'

	export let name: string = ''
	export let value: any = ''
	export let attributes: IFieldAttributes = {
		id: '',
		type: 'checkbox'
	}
</script>

<input
	{name}
	{...attributes}
	class={`toggle ${attributes.class.join(' ')}`}
	type="checkbox"
	bind:checked={value}
/>
