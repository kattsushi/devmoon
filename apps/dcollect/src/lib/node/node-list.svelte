<script lang="ts">
	import { Divider, Icon, Menu, MenuItem, Modal, SearchBar } from '@devmoon-libs/ui';

	import { openModal } from 'svelte-modals';
	import folderO from 'svelte-awesome/icons/folderO';
	import folderOpenO from 'svelte-awesome/icons/folderOpenO';
	import plusSquare from 'svelte-awesome/icons/plusSquare';

	export let page: any;
	let isModalOpen = false;

	function handleOpen() {
		openModal(Modal);
	}
</script>

<!-- <Breadcrumb path={page.url.pathname.split('/').slice(1)} /> -->
<div class="flex flex-col p-3 w-full">
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

	<button class="btn btn-primary btn-block" on:click={() => (isModalOpen = !isModalOpen)}>
		<Icon icon={plusSquare} />
		<span class="ml-3"> Add new Node </span>
	</button>
	<Modal isOpen={isModalOpen} />
</div>
