<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { navigating } from '$app/stores';
	let path: string[] = [];
	$: path = [];

	if ($navigating) {
		path = ['Nodes'];
		path.push($page.params.id);
		console.log('path', path);
	}

	onMount(() => {
		console.log('path', $page);
		path = ['Nodes'];
		path.push($page.params.id);
		console.log('path', path);
	});
</script>

<div class="text-lg breadcrumbs text-stone-500 ">
	<ul>
		{#each path as item}
			<li>
				<a class="text-primary" href="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="w-4 h-4 mr-2 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
						/></svg
					>
					<span>
						{item}
					</span>
				</a>
			</li>
		{/each}
	</ul>
</div>
