<script lang="ts">
	import Table from 'svelte-tailwind-table';

	let colData = [
		['Data type', { heading: 'Column 1 heading', data: {} }],
		['Data type', { heading: 'Column 2 heading', data: {} }]
	];

	let rowData = [
		[
			//row 1
			{ value: 'The value', editable: true, href: 'This is optional' }, //column 1 value
			{ value: 'The value', editable: true, href: 'hyperlink for a cell' } //column 2 value
		],
		[
			//row 2
			{ value: 'The value', editable: true }, //column 1 value
			{ value: 'The value', editable: true } //column 2 value
		]
	];
</script>

<Table {colData} {rowData} />
