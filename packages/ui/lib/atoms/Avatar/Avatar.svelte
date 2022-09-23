<script lang="ts">
	export let picture: string
	export let username: string = ''
</script>

<div class="bordered p-0 no-underline hover:no-underline">
	{#if picture}
		<div class="avatar m-auto">
			<div class="ring-primary ring-offset-base-100 w-1 rounded-full ring ring-offset-2">
				<img alt="" src={picture} />
			</div>
		</div>
		{#if username}
			<span class="text-white">{username}</span>
		{/if}
	{/if}
	{#if !picture}
		<div class="avatar placeholder m-auto">
			<div class="bg-neutral-focus w-8 rounded-full">
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
