<script lang="ts">
	import { Divider, Icon, Menu, MenuItem, Modal, SearchBar } from '@devmoon-libs/ui';
	// import  from '@devmoon-libs/ui/src/components/icon/icon.svelte';
	// import  from '@devmoon-libs/ui/src/components/atoms/menu/menu.svelte';
	// import  from '@devmoon-libs/ui/src/components/atoms/menu-item/menu-item.svelte';
	// import  from '@devmoon-libs/ui/src/components/molecules/modal/modal.svelte';
	// import  from '@devmoon-libs/ui/src/components/molecules/search-bar/search-bar.svelte';

	import { openModal } from 'svelte-modals';
	export let page: any;
	import { faPlusSquare, faFolder, faFolderOpen } from '@fortawesome/free-regular-svg-icons';

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
			<Icon icon={page.url.pathname.includes('/admin/nodes/1') ? faFolderOpen : faFolder} />
			Node 1
		</MenuItem>
		<MenuItem href={'/admin/nodes/2'}>
			<Icon icon={page.url.pathname.includes('/admin/nodes/2') ? faFolderOpen : faFolder} />
			Node 2
		</MenuItem>
	</Menu>

	<Divider isHorizontal={true} />

	<button class="btn btn-primary btn-block" on:click={() => (isModalOpen = !isModalOpen)}>
		<Icon icon={faPlusSquare} />
		<span class="ml-3"> Add new Node </span>
	</button>
	<Modal isOpen={isModalOpen} />
</div>
