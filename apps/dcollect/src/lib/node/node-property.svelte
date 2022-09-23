<script lang="ts">
	import { onDestroy, onMount, createEventDispatcher } from 'svelte'
	import { Subject, scheduled, asyncScheduler, Subscription } from 'rxjs'
	import { filter, debounceTime, distinctUntilChanged, map } from 'rxjs/operators'

	import { ReactiveForm } from '@devmoon/ui'
	import { defaultFields, numberFields, textFields } from '$lib/store/nodes/services/data'
	import type { IProperty } from '$lib/store/nodes/types'

	export let property: IProperty

	let formBuilder: any
	let isLoading = true
	let open = false

	const dispatch = createEventDispatcher()
	const onSubmit = (data: any) => {
		const { values, valid } = data.detail
		property.values = values
		dispatch('submit', { property, valid })
	}

	const subject$: Subject<string> = new Subject()
	let sub: Subscription

	const onValuesPropertyChange = (data: any) => {
		const { form, values } = data.detail
		if (values?.type && ['text', 'number'].includes(values.type)) {
			const fields: any = {
				text: (type: string) => [...defaultFields(type), ...textFields],
				number: (type: string) => [...defaultFields(type), ...numberFields]
			}
			formBuilder.fields = fields[values.type](values.type)
		}
		if (values.touched.nameField && values.nameField) {
		}
	}
	onMount(() => {
		formBuilder = property.formBuilder
		isLoading = false
		sub = scheduled(subject$.asObservable(), asyncScheduler)
			.pipe(
				map(value => value),
				filter((value: string) => value.length > 0),
				debounceTime(500),
				distinctUntilChanged(),
				map(value => {
					console.log('value', value)
					setTimeout(() => {}, 500)
				})
			)
			.subscribe()
	})
	onDestroy(() => {
		sub.unsubscribe()
	})
</script>

<div
	class="collapse collapse-arrow border-base-300 bg-base-100 rounded-box col-span-full mb-2 border"
	class:collapse-open={open}
>
	<input type="checkbox" class="peer" />
	<div
		on:click|preventDefault={() => {
			open = !open
		}}
		class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
	>
		{property.isNew ? 'New' : 'Update'}
		{property.name}
	</div>
	<div
		class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
	>
		{#if isLoading}
			is loading..
		{:else}
			<ReactiveForm
				debug={false}
				withShadow={false}
				formBuilder={property.formBuilder}
				submitButtonText="Save Property"
				hasCancelButton={true}
				cancelButtonText="Remove Property"
				on:onSubmit={onSubmit}
				on:onValues={onValuesPropertyChange}
				on:onCancel={() => {
					dispatch('removeProperty', property)
				}}
			/>
		{/if}
	</div>
</div>
