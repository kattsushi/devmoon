<script lang="ts">
	import { ReactiveForm, type IReactiveFormBuilder } from '@devmoon/components'
	import textHeight from 'svelte-awesome/icons/textHeight'
	import hashtag from 'svelte-awesome/icons/hashtag'
	import calendar from 'svelte-awesome/icons/calendar'

	const formBuilder: IReactiveFormBuilder = {
		fields: [
			{
				colSpan: 'col-span-12',
				type: 'input',
				name: 'name',
				rules: ['required'],
				messages: {
					required: 'Please enter your name here is required'
				},
				attributes: {
					type: 'text',
					id: 'name',
					label: 'Name',
					required: true,
					disabled: true
				}
			},
			{
				colSpan: 'col-span-12 md:col-span-6',
				type: 'input',
				name: 'name2',
				rules: ['required', 'email'],
				messages: {
					required: ' '
				},
				attributes: {
					type: 'email',
					id: 'name',
					label: 'Name',
					placeholder: 'Name here',
					required: true
				}
			},
			{
				colSpan: 'col-span-12 md:col-span-6',
				type: 'select',
				name: 'select',
				rules: ['required'],
				messages: {
					required: ' '
				},
				attributes: {
					id: 'name',
					label: 'Select',
					placeholder: 'Name here',
					required: true
				},
				extra: {
					options: [
						{
							value: 'text',
							label: 'Text',
							icon: textHeight
						},
						{
							value: 'number',
							label: 'Number',
							icon: hashtag
						},
						{
							value: 'date',
							label: 'Date',
							icon: calendar
						}
					]
				}
			},
			{
				colSpan: 'col-span-12 md:col-span-6',
				type: 'input',
				name: 'inputnumb',
				rules: ['required', 'min', 'max'],
				messages: {
					required: ' '
				},
				attributes: {
					id: 'name',
					type: 'number',
					min: '0',
					max: '100',
					label: 'Number',
					placeholder: 'Name here',
					required: true
				}
			},
			{
				colSpan: 'col-span-12 md:col-span-6',
				type: 'input',
				name: 'inputcheckbox',
				rules: ['required'],
				messages: {
					required: ' '
				},
				attributes: {
					id: 'inputcheckbox',
					type: 'checkbox',
					placeholder: 'checkbox here'
				}
			}
		],
		formName: 'test',
		size: 'md'
	}

	const handleSubmit = (data: any) => {
		console.log('handleSubmit', data.detail)
	}
</script>

<ReactiveForm debug={true} hasCancelButton={true} {formBuilder} on:onSubmit={handleSubmit} />
