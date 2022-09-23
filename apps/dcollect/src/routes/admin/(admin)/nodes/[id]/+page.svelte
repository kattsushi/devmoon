<script lang="ts">
	import { page } from '$app/stores'
	import NodeDetail from '$lib/node/node-detail.svelte'
</script>

<!--  -->
<NodeDetail id={$page.params.id} />
