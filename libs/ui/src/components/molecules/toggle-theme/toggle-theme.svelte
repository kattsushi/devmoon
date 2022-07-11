<script lang="ts">
	import Toggle from '../../atoms/toggle/toggle.svelte';
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';

	onMount(() => {
		themeChange(false);
	});
</script>

<button
	data-toggle-theme="dark,light"
	data-act-class="ACTIVECLASS"
	style="visibility: hidden;"
	id="changeTheme"
/>
<Toggle on:click={() => document.getElementById('changeTheme')?.click()} />
