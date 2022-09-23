<script lang="ts">
	import Toggle from '../../atoms/Toggle/toggle.svelte'
	import { themeChange } from 'theme-change'
	import { onMount } from 'svelte'

	import { browser } from '$app/environment'

	onMount(() => {
		if (browser) {
			themeChange(false)
		}
	})
</script>

<button
	data-toggle-theme="dark,light"
	data-act-class="ACTIVECLASS"
	style="visibility: hidden;"
	id="changeTheme"
/>
<Toggle on:click={() => browser && document.getElementById('changeTheme')?.click()} />
