<script lang="ts">
	export let isModalOpen = false;
	$: isModalOpen = false;
</script>

<input
	type="checkbox"
	id="my-modal-5"
	class="modal-toggle"
	on:click={() => (isModalOpen = false)}
/>
<div class="modal" class:modal-open={isModalOpen}>
	<div class="modal-box w-11/12 max-w-5xl">
		<h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<div class="modal-action">
			<button class="btn" on:click={() => (isModalOpen = false)}>Yay!</button>
		</div>
	</div>
</div>
