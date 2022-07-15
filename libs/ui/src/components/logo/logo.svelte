<script lang="ts">
	import Icon from '../icon/icon.svelte';
	import { faWindowClose } from '@fortawesome/free-regular-svg-icons';

	export let logo: string = undefined;
</script>

<div class="text-center mb-4 mt-5">
	<Icon icon={faWindowClose} />
	{#if logo}
		{logo}
	{/if}
</div>
