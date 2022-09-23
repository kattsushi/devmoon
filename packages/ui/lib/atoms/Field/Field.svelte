<script lang="ts">
	import type {
		FieldType,
		IFieldsComponents,
		IFieldAttributes
	} from '../../molecules/ReactiveForm/ReactiveForm.types'
	import TextArea from './../TextArea/TextArea.svelte'
	import CheckBox from '../checkbox/checkBox.svelte'
	import Input from '../input/input.svelte'
	import Select from '../select/select.svelte'

	export let type: FieldType = 'input'
	export let attributes: IFieldAttributes = {}
	export let extra: any = {}
	export let name: string = ''
	export let value
	export let error: boolean = false
	const fieldComponents: IFieldsComponents = {
		input: Input,
		checkbox: CheckBox,
		textarea: TextArea,
		select: Select
	}
</script>

<div class="relative flex w-full flex-col items-center">
	<svelte:component this={fieldComponents[type]} {name} {extra} {value} {attributes} {error} />
	<label
		for={attributes.id}
		class="bg-base-100 -z-1 origin-0 absolute top-0 left-1 p-4 text-lg transition-all duration-300"
	>
		<span class="label-text">{attributes?.label || ''}</span>
	</label>
</div>
