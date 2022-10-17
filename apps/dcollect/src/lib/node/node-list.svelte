<script lang="ts">
	import { Divider, Icon, Menu, MenuItem, Modal, SearchBar } from '@devmoon/components'

	import { closeModal, Modals, openModal } from 'svelte-modals'
	import folderO from 'svelte-awesome/icons/folderO'
	import folderOpenO from 'svelte-awesome/icons/folderOpenO'
	import plusSquare from 'svelte-awesome/icons/plusSquare'
	import NodeForm from './node-form.svelte'

	export let page: any
	let isModalOpen = false

	function handleOpen() {
		openModal(NodeForm, { nodeId: 'someid' })
	}
</script>

<!-- <Breadcrumb path={page.url.pathname.split('/').slice(1)} /> -->
<div class="flex w-full flex-col p-3">
	<SearchBar />

	<Divider isHorizontal={true} />

	<Menu>
		<MenuItem href={'/admin/nodes/1'}>
			<Icon icon={page.url.pathname.includes('/admin/nodes/1') ? folderOpenO : folderO} />
			Node 1
		</MenuItem>
		<MenuItem href={'/admin/nodes/2'}>
			<Icon icon={page.url.pathname.includes('/admin/nodes/2') ? folderOpenO : folderO} />
			Node 2
		</MenuItem>
	</Menu>

	<Divider isHorizontal={true} />

	<button class="btn btn-primary btn-block" on:click|preventDefault={handleOpen}>
		<Icon icon={plusSquare} />
		<span class="ml-3"> Add new Node </span>
	</button>
</div>
