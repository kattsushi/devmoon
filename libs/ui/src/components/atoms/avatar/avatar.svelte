<script lang="ts">
	export let picture: string;
	export let username: string = '';
</script>

<div class="btn btn-ghost btn-circle avatar  p-0">
	<div class="w-10 rounded-full">
		<img alt="" src={picture ?? ''} />
		{#if username}
			<span class="text-white">{username}</span>
		{/if}
	</div>
</div>
