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

	type OwnProps = {
		fieldType: FieldType
		error: boolean
		extra: any
	}

	type $$Props =
		| (svelteHTML.IntrinsicElements['input'] & OwnProps)
		| (svelteHTML.IntrinsicElements['textarea'] & OwnProps)
		| (svelteHTML.IntrinsicElements['select'] & OwnProps)
		| (svelteHTML.IntrinsicElements['checkbox'] & OwnProps)

	export let fieldType: OwnProps['fieldType'] = 'input'
	export let extra: OwnProps['extra'] = {}
	export let error: OwnProps['error'] = false

	const fieldComponents: IFieldsComponents = {
		input: Input,
		checkbox: CheckBox,
		textarea: TextArea,
		select: Select
	}
</script>

<div class="relative flex w-full flex-col items-center">
	<svelte:component this={fieldComponents[fieldType]} {...$$restProps} {extra} {error} />
	<label
		for={$$restProps.id}
		class="bg-base-100 -z-1 origin-0 absolute top-0 left-1 p-4 text-lg transition-all duration-300"
	>
		<span class="label-text">{extra?.label || ''}</span>
	</label>
</div>
