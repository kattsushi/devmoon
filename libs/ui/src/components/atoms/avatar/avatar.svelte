<script lang="ts">
	export let picture: string;
	export let username: string = '';
</script>

<div class="bordered no-underline hover:no-underline">
	{#if picture}
		<div class="avatar">
			<div class="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
				<img alt="" src={picture} />
			</div>
		</div>
		{#if username}
			<span class="text-white">{username}</span>
		{/if}
	{/if}
	{#if !picture}
		<div class="avatar placeholder">
			<div class="bg-neutral-focus text-neutral-content rounded-full w-12">
				<span>{username.substring(0, 1).toLocaleUpperCase()}</span>
			</div>
		</div>

		{#if username}
			<span class="text-white">{username}</span>
		{/if}
	{/if}
</div>
<!-- 
<div class="bordered no-underline hover:no-underline">
	<div class="w-10 rounded-full">
		<img alt="" src={picture ?? ''} />
	</div>
	{#if username}
		<span class="text-white">{username}</span>
	{/if}
</div> -->

<!-- <div class="btn btn-ghost avatar  p-0">
	<div class="w-10 rounded-full">
		<img alt="" src={picture ?? ''} />
	</div>
	{#if username}
		<span class="text-white">{username}</span>
	{/if}
</div> -->
