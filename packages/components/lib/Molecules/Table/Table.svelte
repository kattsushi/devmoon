<script lang="ts">
	import SvelteTable from 'svelte-table'
	import type { Column } from './types'
	import { paginate, PaginationNav } from 'svelte-paginate'

	function SetPage(e: any) {
		currentPage = e.detail.page
	}

	export let items: Row[] = [
		{ id: 1, first_name: 'Marilyn', last_name: 'Monroe', pet: 'dog' },
		{ id: 2, first_name: 'Abraham', last_name: 'Lincoln', pet: 'dog' },
		{ id: 3, first_name: 'Mother', last_name: 'Teresa', pet: '' },
		{ id: 4, first_name: 'John F.', last_name: 'Kennedy', pet: 'dog' },
		{ id: 5, first_name: 'Martin Luther', last_name: 'King', pet: 'dog' },
		{ id: 6, first_name: 'Nelson', last_name: 'Mandela', pet: 'cat' },
		{ id: 7, first_name: 'Winston', last_name: 'Churchill', pet: 'cat' },
		{ id: 8, first_name: 'George', last_name: 'Soros', pet: 'bird' },
		{ id: 9, first_name: 'Bill', last_name: 'Gates', pet: 'cat' },
		{ id: 10, first_name: 'Muhammad', last_name: 'Ali', pet: 'dog' },
		{ id: 11, first_name: 'Mahatma', last_name: 'Gandhi', pet: 'bird' },
		{ id: 12, first_name: 'Margaret', last_name: 'Thatcher', pet: 'cat' },
		{ id: 13, first_name: 'Christopher', last_name: 'Columbus', pet: 'dog' },
		{ id: 14, first_name: 'Charles', last_name: 'Darwin', pet: 'dog' },
		{ id: 15, first_name: 'Elvis', last_name: 'Presley', pet: 'dog' },
		{ id: 16, first_name: 'Albert', last_name: 'Einstein', pet: 'dog' },
		{ id: 17, first_name: 'Paul', last_name: 'McCartney', pet: 'cat' },
		{ id: 18, first_name: 'Queen', last_name: 'Victoria', pet: 'dog' },
		{ id: 19, first_name: 'Pope', last_name: 'Francis', pet: 'cat' }
		// etc...
	]
	let currentPage = 1
	let pageSize = 4
	$: rows = paginate({ items, pageSize, currentPage })
	type Row = {
		id: number
		first_name: string
		last_name: string
		pet: string
	}

	export let columns: Column<typeof rows[0]>[] = [
		{
			key: 'id',
			title: 'ID',
			value: v => v.id,
			sortable: true,
			filterOptions: rows => {
				// generate groupings of 0-10, 10-20 etc...
				let nums = {} as any
				rows.forEach((row: Row) => {
					let num: number = Math.floor(row.id / 10)
					if (nums[num] === undefined)
						nums[num] = { name: `${num * 10} to ${(num + 1) * 10}`, value: num }
				})
				// fix order
				nums = Object.entries(nums)
					.sort()
					.reduce((o: any, [k, v]) => ((o[k] = v), o), {})
				return Object.values(nums)
			},
			filterValue: v => `${Math.floor(v.id / 10)}`,
			headerClass: 'text-left'
		},
		{
			key: 'first_name',
			title: 'FIRST_NAME',
			value: v => `${v.first_name} lol`,
			sortable: true,
			filterOptions: rows => {
				// use first letter of first_name to generate filter
				let letrs: any = {}
				rows.forEach((row: any) => {
					let letr = row.first_name.charAt(0)
					if (letrs[letr] === undefined)
						letrs[letr] = {
							name: `${letr.toUpperCase()}`,
							value: letr.toLowerCase()
						}
				})
				// fix order
				letrs = Object.entries(letrs)
					.sort()
					.reduce((o: any, [k, v]) => ((o[k] = v), o), {})
				return Object.values(letrs)
			},
			filterValue: v => v.first_name.charAt(0).toLowerCase()
		},
		{
			key: 'last_name',
			title: 'LAST_NAME',
			value: v => v.last_name,
			sortable: true,
			filterOptions: v => {
				// use first letter of last_name to generate filter
				let letrs = {} as any
				v.forEach((row: any) => {
					let letr = row.last_name.charAt(0)
					if (letrs[letr] === undefined)
						letrs[letr] = {
							name: `${letr.toUpperCase()}`,
							value: letr.toLowerCase()
						}
				})
				// fix order
				letrs = Object.entries(letrs)
					.sort()
					.reduce((o: any, [k, v]) => ((o[k] = v), o), {})
				return Object.values(letrs)
			},
			filterValue: v => v.last_name.charAt(0).toLowerCase()
		},
		{
			key: 'pet',
			title: 'Pet',
			value: v => v.pet,
			renderValue: (v: any) => v.pet.charAt(0).toUpperCase() + v.pet.substring(1), // capitalize
			sortable: true,
			filterOptions: ['bird', 'cat', 'dog'] // provide array
		}
	]
</script>

<div class="mb-4">
	<!-- <SvelteTable classNameTable="table table-zebra w-full" {columns} {rows} /> -->
</div>

<div class="flex">
	<PaginationNav
		totalItems={items.length}
		{pageSize}
		{currentPage}
		limit={1}
		showStepOptions={true}
		on:setPage={SetPage}
	/>
</div>
