<script lang="ts">
	import Toggle from '../../Atoms/Toggle/toggle.svelte'
	import { themeChange } from 'theme-change'
	import { onMount } from 'svelte'

	// import { browser } from '$app/environment'

	onMount(() => {
		if (window) {
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
<Toggle on:click={() => window && document.getElementById('changeTheme')?.click()} />
