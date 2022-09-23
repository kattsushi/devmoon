<script>
	import Breadcrumb from '../../atoms/Breadcrumb/breadcrumb.svelte'
	import plusSquare from 'svelte-awesome/icons/plusSquare'
	import Icon from '../../atoms/Icon/Icon.svelte'
</script>

<div class="mb-4 flex flex-row">
	<div>
		<Breadcrumb />
	</div>
	<button class="btn btn-primary ml-auto">
		<Icon icon={plusSquare} />
		<span class="ml-3"> Add new Node </span>
	</button>
</div>
