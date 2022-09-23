<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	export let checked: boolean = false
	export let text: string = ''
	const dispatch = createEventDispatcher()
	function click() {
		dispatch('click')
	}
</script>

<div class="form-control">
	<label class="label cursor-pointer p-0">
		<span class="label-text">{text}</span>
		<input on:click={click} type="checkbox" class="toggle toggle-primary" bind:checked />
	</label>
</div>
