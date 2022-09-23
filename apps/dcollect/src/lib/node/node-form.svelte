<script lang="ts">
	import folderO from 'svelte-awesome/icons/folderO'
	import { closeModal } from 'svelte-modals'
	import { ReactiveForm, Icon, Modal, type IReactiveFormBuilder } from '@devmoon/ui'
	import { nodeStore } from '$lib/store/nodes'
	import { defaultFields, NodeFormFields, textFields } from '$lib/store/nodes/services/data'
	import { min } from 'rxjs'

	export let isOpen: boolean
	export let nodeId: string

	let formRef: ReactiveForm
	const { properties } = nodeStore
	const formBuilder: IReactiveFormBuilder = {
		formName: 'NodeForm',
		fields: NodeFormFields,
		groupsFormsOptions: {
			formName: 'Properties',
			label: 'Properties',
			name: 'properties',
			values: [
				{
					nameField: '',
					type: 'text',
					min: 0,
					max: 100,
					regex: '^[0-9]{1,3}$'
				}
			],
			fields: [...defaultFields('text'), ...textFields]
		}
	}

	const handleAddProperty = () => {
		nodeStore.addProperty()
	}

	const onSubmit = (data: any) => {
		const { values, valid, multi } = data.detail
		console.log(values, valid, multi)
		// if (valid) {
		//   const then = (res: any) => {
		//     closeModal();
		//   };
		//   store.dispatch(updateNode({ ...values, then }));
		// }
	}

	const handleMultiValuesChange = (data: any) => {
		console.log('handleMultiValuesChange', data.detail)
		console.log('formRef', formRef)
		formRef.setForm(1, 'hola')
	}
</script>

{#if isOpen}
	<Modal>
		<h2 slot="title">
			<Icon icon={folderO} />
			<span class="ml-3"> {nodeId ? 'Add new' : 'Update'} Node </span>
		</h2>

		<div slot="content">
			<ReactiveForm
				bind:this={formRef}
				debug={true}
				{formBuilder}
				withShadow={false}
				isMultiForm={true}
				addMultiFormText={'Add Property'}
				removeMultiFormText={'Remove Property'}
				submitButtonText="Save"
				on:onCancel={closeModal}
				on:onSubmit={onSubmit}
				on:onMultiValues={handleMultiValuesChange}
				hasCancelButton={true}
			/>
		</div>
	</Modal>
{/if}
