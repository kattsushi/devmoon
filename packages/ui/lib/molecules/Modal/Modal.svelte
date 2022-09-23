<script lang="ts">
	import Card from '../card/card.svelte'
</script>

<div class="custom-modal">
	<Card customClass="sm:max-w-lg">
		<h2 class="card-title px-8">
			<slot name="title" />
		</h2>
		<slot name="content" />
		<div class="card-actions justify-end">
			<slot name="actions" />
		</div>
	</Card>
</div>

<style>
	.custom-modal {
		z-index: 20;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		/* allow click-through to backdrop */
		pointer-events: none;
	}
</style>
