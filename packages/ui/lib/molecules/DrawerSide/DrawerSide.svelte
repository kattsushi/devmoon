<script lang="ts">
	// import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte'
	import signOut from 'svelte-awesome/icons/signOut'
	import Divider from '../../atoms/Divider/divider.svelte'
	// import { Avatar, Divider } from '../../atoms';
	import Icon from '../../atoms/Icon/Icon.svelte'
	// import { authStore } from '$lib/store/auth';
	// const { user } = authStore;
	const dispatch = createEventDispatcher()
	export let sidebarItems: any[] = []

	const handgleNavClick = (path: string) => {
		window.location.assign(path)
	}
</script>

<div class="drawer-side">
	<label for="my-drawer-3" class="drawer-overlay" />
	<ul class="menu bg-base-100 w-80 overflow-y-auto p-3">
		<li on:click={() => dispatch('onLogoClick')}>
			<slot name="logo" />
		</li>
		<!-- Sidebar content here -->
		{#each sidebarItems as { href, icon, name }}
			<li class="mt-2">
				<div
					class="bordered no-underline hover:no-underline"
					on:click|preventDefault={() => handgleNavClick(href)}
				>
					{#if icon}
						<Icon {icon} />
					{/if}
					{name}
				</div>
				<Divider />
			</li>
		{/each}
		<li class="mt-auto flex">
			<div class="flex flex-initial">
				<!-- <Avatar picture={$user?.photo ?? ''} username={$user?.username ?? ''} /> -->
			</div>
			<button
				on:click|preventDefault={() => dispatch('onLogoutClick')}
				class="bordered no-underline hover:no-underline"
			>
				<Icon icon={signOut} />
				Logout
			</button>
		</li>
	</ul>
</div>
