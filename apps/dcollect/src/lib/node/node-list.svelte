<script lang="ts">
	import { Divider, Icon, Menu, MenuItem } from '@devmoon-libs/ui';
	import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons/index.es';
	export let page: any;
	import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
</script>

<!-- <Breadcrumb path={page.url.pathname.split('/').slice(1)} /> -->
<div class="flex flex-col p-3 w-full">
	<div class="form-control">
		<div class="input-group">
			<input type="text" placeholder="Search…" class="input input-bordered w-72" />
			<button class="btn btn-square">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/></svg
				>
			</button>
		</div>
	</div>

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

	<button class="btn btn-primary btn-block">
		<Icon icon={faPlusSquare} />
		<span class="ml-3"> Add new Node </span>
	</button>
</div>
