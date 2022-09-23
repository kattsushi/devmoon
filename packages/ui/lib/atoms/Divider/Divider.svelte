<script lang="ts">
	export let isHorizontal: boolean = false
</script>

<div class="divider {isHorizontal ? 'divider-vertical' : 'divider-horizontal'}">
	<slot />
</div>

<style>
	.divider-horizontal {
		margin-left: 0px !important;
	}
</style>
