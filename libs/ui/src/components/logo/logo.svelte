<script lang="ts">
	import Icon from '../icon/icon.svelte';
	import { faCircleNodes } from '@fortawesome/free-solid-svg-icons/index.es';

	export let logo: string = undefined;
</script>

<div>
	<Icon icon={faCircleNodes} />
	{#if logo}
		{logo}
	{/if}
</div>
