<script lang="ts">
	import { Navbar, SearchBar, Table } from '@devmoon-libs/ui';

	// import Table from '@devmoon-libs/ui/src/components/molecules/table/table.svelte';
	// import SearchBar from '@devmoon-libs/ui/src/components/molecules/search-bar/search-bar.svelte'
	// import Navbar from '@devmoon-libs/ui/src/components/molecules/navbar/navbar.svelte';

	export const id: string = 'node-detail';
</script>

<div class="flex flex-col p-2">
	<Navbar />
	<SearchBar />
	<div class="overflow-x-auto">
		<Table />
	</div>
</div>
