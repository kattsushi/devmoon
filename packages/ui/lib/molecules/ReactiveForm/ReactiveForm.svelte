<script lang="ts">
	import { get } from 'svelte/store'
	import { createEventDispatcher, onDestroy } from 'svelte'
	import type { FieldRule, IReactiveFormBuilder } from './ReactiveForm.types'
	import { formula, beaker } from 'svelte-formula'
	import type { Beaker } from 'svelte-formula'
	import { onMount } from 'svelte'

	import Field from './../../atoms/field/field.svelte'
	import Card from './../../molecules/card/card.svelte'
	import Button from '../../atoms/Button/Button.svelte'

	const dispatch = createEventDispatcher()

	export let formBuilder: IReactiveFormBuilder = {}
	export let withShadow: boolean = true
	export let hasCancelButton: boolean
	export let submitButtonText: string = 'Submit'
	export let cancelButtonText: string = 'Cancel'
	export let isMultiForm: boolean = false
	export let addMultiFormText: string = 'Add'
	export let removeMultiFormText: string = 'Remove'
	export let debug = false

	export let loadging: boolean = false
	let subscription
	let forms: Beaker<any[]> = beaker()

	const formsValues = forms.formValues
	const formsValuesTouched = forms.touched

	forms.init(formBuilder?.groupsFormsOptions?.values)

	let open = false

	const { form, formValues, isFormValid, updateForm, validity, dirty, touched } = formula({
		formValidators: formBuilder.formValidators,
		validators: {
			password: {
				password: (value: any) =>
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
						? null
						: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.'
			}
		}
	})

	const validators = {
		required: (value: any) => {
			return !!value
		},
		email: (value: any) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
		minLength: (value: any, minLength) => value.length >= minLength,
		maxLength: (value: any, maxLength) => value.length <= maxLength,
		min: (value: any, min) => value >= min,
		max: (value: any, max) => value <= max,
		pattern: (value: any, pattern) => pattern.test(value),
		password: (value: any) =>
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
				? null
				: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.'
	}

	let fieldValidators = {}
	let fieldMessage = {}
	const onSubmit = ev => {
		dispatch('onSubmit', {
			values: get(formValues),
			multi: get(formsValues),
			valid: get(isFormValid)
		})
	}

	export function setForm(index: number, form: any) {
		console.log('index', index)

		// forms.set(index, form);
	}

	const addForm = () => {
		forms.add([
			{
				nameField: '',
				type: 'text',
				min: 0,
				max: 100,
				regex: '^[0-9]{1,3}$'
			}
		])
	}

	const deleteForm = index => {
		forms.delete(index)
	}

	onMount(() => {
		subscription = formValues.subscribe(values => {
			dispatch('onValues', {
				values: {
					...values,
					touched: get(touched)
				}
			})
		})

		formsValues.subscribe(values => {
			let touched = get(formsValuesTouched)

			setTimeout(() => {
				console.log('touched', touched)
				dispatch('onMultiValues', {
					values: {
						...values,
						touched
					}
				})
			}, 1000)
		})

		loadging = true
		const rules = Object.keys(validators)
		formBuilder.fields.map(field => {
			rules.forEach((rule: FieldRule) => {
				if (field.rules?.includes(rule)) {
					fieldValidators[field.name] = validators[rule]
					fieldMessage[field.name] = { valueMissing: field.messages[rule] ?? ' ' }
				}
			})
		})
		updateForm({
			messages: fieldMessage,
			validators: fieldValidators
		})
		loadging = false
	})

	onDestroy(() => {
		subscription && subscription()
	})

	$: if (debug) {
		console.log('$current', $formValues)
		console.log('$validity', $validity)
		console.log('$touched', $touched)
		console.log('$dirty', $dirty)
		console.log('$form valid', $isFormValid)
		console.log('$formsValues', $formsValues)
		console.log('$formsValuesTouched', $formsValuesTouched)
	}
</script>

<Card {withShadow}>
	{#if loadging}
		loading...
	{:else}
		<form
			class="grid grid-cols-12 gap-5 gap-y-5"
			use:form
			role="rowgroup"
			name={formBuilder.formName}
			on:submit|preventDefault={onSubmit}
		>
			{#each formBuilder.fields as { name, attributes, value, type, colSpan, extra }}
				<div class={`relative form-control ${colSpan}`}>
					<Field
						error={$touched[name] && $validity[name]?.invalid}
						{name}
						{value}
						{attributes}
						{type}
						{extra}
					/>
					<div
						class="bg-base-100 absolute right-3 top-8 z-10 mt-2 px-2 text-right text-xs text-red-500 "
						hidden={!$touched[name] || $validity[name]?.valid}
					>
						{$validity[name]?.message}
					</div>
				</div>
			{/each}
			{#if isMultiForm}
				<div use:forms.group class="col-span-full">
					{#each $formsValues as row, i}
						<div
							class="collapse collapse-arrow border-base-300 bg-base-100 rounded-box col-span-full mb-2 border"
							class:collapse-open={open}
						>
							<input type="checkbox" class="peer" />
							<div
								on:click|preventDefault={() => {
									open = !open
								}}
								class="collapse-title bg-secondary text-secondary-content peer-checked:bg-primary peer-checked:text-primary-content"
							>
								New
							</div>
							<div
								class="collapse-content bg-secondary text-secondary-content peer-checked:bg-base-100 peer-checked:text-primary-content mt-4"
							>
								{#each formBuilder.groupsFormsOptions.fields as { name, attributes, type, colSpan, extra }}
									<div class={`relative form-control ${colSpan} mb-2`}>
										<Field
											error={$touched[name] && $validity[name]?.invalid}
											{name}
											value={row[name]}
											attributes={{ ...attributes, id: `${name}-${i}` }}
											{type}
											{extra}
										/>
										<div
											class="bg-base-100 absolute right-3 top-8 z-10 mt-2 px-2 text-right text-xs text-red-500 "
											hidden={!$touched[name] || $validity[name]?.valid}
										>
											{$validity[name]?.message}
										</div>
									</div>
								{/each}
								<button
									class="btn btn-secondary my-2"
									on:click={() => {
										deleteForm(i)
									}}
									type="button">{removeMultiFormText}</button
								>
							</div>
						</div>
					{/each}
				</div>
				<button on:click|preventDefault={addForm} class="btn btn-outline col-span-full">
					{addMultiFormText}
				</button>
			{/if}

			<slot />
			<div class="form-control col-span-full">
				{#if hasCancelButton}
					<Button
						variant="ring-warning"
						customClass="my-2"
						on:click={() => dispatch('onCancel')}
						type="button">{cancelButtonText}</Button
					>
				{/if}
				<Button type={'submit'}>
					{submitButtonText}
				</Button>
			</div>
		</form>
	{/if}
</Card>
1
