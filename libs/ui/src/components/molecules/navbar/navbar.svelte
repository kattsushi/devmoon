<script>
	import Breadcrumb from '../../breadcrumb/breadcrumb.svelte';
	import plusSquare from 'svelte-awesome/icons/plusSquare';
	import Icon from '../../icon/icon.svelte';
</script>

<div class="flex flex-row mb-4">
	<div>
		<Breadcrumb />
	</div>
	<button class="btn btn-primary ml-auto">
		<Icon icon={plusSquare} />
		<span class="ml-3"> Add new Node </span>
	</button>
</div>
