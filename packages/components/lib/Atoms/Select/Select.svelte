<script lang="ts">
	import { onMount } from 'svelte'
	import Icon from '../Icon/Icon.svelte'
	import type { IFieldAttributes } from '../../Molecules/ReactiveForm/ReactiveForm.types'
	import exchange from 'svelte-awesome/icons/exchange'

	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption
	} from '@rgossiaux/svelte-headlessui'

	export let attributes: IFieldAttributes = {
		id: '',
		type: 'text'
	}
	export let extra: {
		options?: any[]
	} = {}
	export let value = ''
	export let name = ''
	export let error: boolean = true
	let nodeRef: HTMLSelectElement
	let selected: {
		value: string
		label: string
		icon: any
	} = {
		value: '',
		label: '',
		icon: exchange
	}

	const onChange = (e: any) => {
		selected.value = e
		selected.label = extra.options.find(v => v.value === e).label
		selected.icon = extra.options.find(v => v.value === e).icon

		value = selected.value
		nodeRef.value = selected.value
		nodeRef.dispatchEvent(new Event('change'))
		nodeRef.dispatchEvent(new Event('select'))
	}

	onMount(() => {
		const index = extra.options.findIndex(v => v.value === value)
		// console.log('index', index);
		// console.log('value', value);
		// console.log('extra', extra);
		// console.log('name', name);
		// console.log('id', attributes.id);
		// console.log('====================================');
		if (index !== -1) {
			selected.value = extra.options[index].value
			selected.label = extra.options[index].label
			selected.icon = extra.options[index].icon
		}
	})

	const ref = (node: HTMLSelectElement) => {
		nodeRef = node
	}
</script>

<Listbox class="w-full" value={selected} on:change={e => (selected = e.detail)}>
	<ListboxButton class="custom-select relative w-full">
		<span class="bg-base-100 text-2xs absolute -top-2 left-3 px-2">{attributes.label}</span>
		<span class="ml-2 flex w-full items-center pr-2">
			<Icon icon={selected.icon} />
			<span class="ml-3 block truncate"> {selected.label} </span>
		</span>
	</ListboxButton>
	<ListboxOptions
		class="bg-base-100 absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
	>
		{#each extra.options as option}
			<ListboxOption
				on:click={() => onChange(option.value)}
				class={`${selected === option ? 'bg-primary' : ''} flex items-center px-4 py-2`}
				value={option}
			>
				<span class="inset-y-0 flex items-center pr-4">
					<Icon icon={option.icon} />
				</span>
				<span class:font-semibold={selected === option} class="ml-3 block truncate font-normal">
					{option.label}
				</span>
			</ListboxOption>
		{/each}
	</ListboxOptions>
</Listbox>

<select
	class="invisible absolute"
	use:ref
	class:input-error={error}
	id={attributes.id}
	{name}
	{value}
	required={attributes.required}
	placeholder={attributes.label}
	class:!input-error={error}
>
	<option hidden selected disabled class="text-lg">{attributes.label}</option>
	{#each extra.options as option}
		<option value={option.value}>{option.label}</option>
	{/each}
</select>
