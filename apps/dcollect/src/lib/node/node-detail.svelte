<script lang="ts">
	import { SearchBar, Navbar } from '@devmoon-libs/ui';

	export let id: string;
</script>

<div class="flex flex-col p-2">
	<Navbar />
	<SearchBar />
	<div class="overflow-x-auto">
		<table class="table w-full">
			<!-- head -->
			<thead>
				<tr>
					<th />
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->
				<tr>
					<th>1</th>
					<td>Cy Ganderton</td>
					<td>Quality Control Specialist</td>
					<td>Blue</td>
				</tr>
				<!-- row 2 -->
				<tr class="hover">
					<th>2</th>
					<td>Hart Hagerty</td>
					<td>Desktop Support Technician</td>
					<td>Purple</td>
				</tr>
				<!-- row 3 -->
				<tr>
					<th>3</th>
					<td>Brice Swyre</td>
					<td>Tax Accountant</td>
					<td>Red</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
