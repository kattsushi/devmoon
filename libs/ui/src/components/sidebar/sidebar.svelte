<script lang="ts">
	import Icon from '../icon/icon.svelte';
	import signOut from 'svelte-awesome/icons/signOut';
	// import { logout } from '@devmoon-dcollect-libs/store';
	// import { store } from '@devmoon-dcollect-libs/store';
	import Avatar from '../atoms/avatar/avatar.svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import Logo from '../logo/logo.svelte';
	import Divider from '../atoms/divider/divider.svelte';
	import ToggleTheme from '../molecules/toggle-theme/toggle-theme.svelte';

	let isDark: boolean = false;

	function changeTheme(e) {
		console.log('changeTheme', e);
		// themeChange(false);
	}
	export let sidebarItems: any[];
	export let user: any;
	export let pathname: string;
	function handleLogout() {
		// store.dispatch(logout());
	}

	const dispatch = createEventDispatcher();
	function toogleDrawer(): void {
		dispatch('toogleDrawer');
	}
</script>

<div class="hidden sm:block h-full">
	<div class="flex-column menu bg-base-100 p-2.5 pt-4 rounded-box h-full" style="width: 70px;">
		<div on:click|preventDefault={toogleDrawer}>
			<Logo />
		</div>
		<Divider isHorizontal={true} />
		<ul>
			{#each sidebarItems as item}
				<li class="mt-1 py-1" class:active={pathname.includes(item.href)}>
					<a href={item.href}>
						<Icon icon={item.icon} />
					</a>
				</li>
			{/each}
		</ul>

		<!-- <button on:click={ () => }>clickme</button> -->
		<div class="mt-auto">
			<ToggleTheme />
			<ul>
				<li>
					<Avatar picture={user?.photo ?? ''} />
					<!-- svelte-ignore a11y-missing-attribute -->
					<a on:click|preventDefault={handleLogout}>
						<!-- svelte-ignore missing-declaration -->
						<Icon icon={signOut} />
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.active {
		border: 2px solid #fff;
		border-radius: 1em;
	}
</style>
