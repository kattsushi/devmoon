<script lang="ts">
	import Logo from '../logo/logo.svelte';
	import Navbar from '../navbar/navbar.svelte';
	import Sidebar from '../sidebar/sidebar.svelte';
	import {
		faBarsProgress,
		faSignOutAlt,
		faBacterium,
		faCircleNodes
	} from '@fortawesome/free-solid-svg-icons/index.es';
	import Icon from '../icon/icon.svelte';
	import { store, useSelector, logout, authSelectors } from '@devmoon-dcollect-libs/store';
	import Avatar from '../atoms/avatar/avatar.svelte';

	export let page: any;

	$: currentUser = useSelector(authSelectors.currentUser, (user: any) => (currentUser = user));
	let checked = false;
	interface Items {
		name: string;
		icon: any;
		href: string;
	}
	let sidebarItems: Items[] = [
		{
			name: 'Dashboard',
			icon: faBarsProgress,
			href: '/admin/dashboard'
		},
		{
			name: 'Entities',
			icon: faBacterium,
			href: '/admin/entities'
		},
		{
			name: 'Entitie Detail',
			icon: faBarsProgress,
			href: '/admin/entities/1'
		}
		// {
		//   name: 'Pages',
		//   icon: faBarsProgress,
		//   href: '/pages'
		// },
		// {
		//   name: 'Settings',
		//   icon: faBarsProgress,
		//   href: '/admin/settings'
		// }
	];

	function toogleDrawer(): void {
		checked = !checked;
	}
	function offDrawer(): void {
		checked = false;
	}

	function handleLogout(): void {
		store.dispatch(logout());
	}
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked />
	<div class="drawer-content flex flex-col p-2">
		<!-- Navbar -->
		<!-- <Navbar user={currentUser} on:toogleDrawer={toogleDrawer} /> -->

		<div class="flex flex-row h-full mb-2">
			<div class="basis-2">
				<Sidebar
					on:toogleDrawer={toogleDrawer}
					pathname={page.url.pathname}
					user={currentUser}
					{sidebarItems}
				/>
			</div>
			<div class="basis-full">
				<slot class="w-full" />
			</div>
		</div>
		<!-- Drawer -->
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-3 overflow-y-auto w-80 bg-base-100">
			<li on:click={toogleDrawer}>
				<Logo logo={'Dcollect'} />
			</li>
			<!-- Sidebar content here -->
			{#each sidebarItems as item}
				<li class="mt-2">
					<a
						class:active={page.url.pathname.includes(item.href)}
						class="bordered no-underline hover:no-underline"
						href={item.href}
					>
						{#if item.icon}
							<Icon icon={item.icon} />
						{/if}
						{item.name}
					</a>
				</li>
			{/each}
			<li class="mt-auto">
				<Avatar picture={currentUser?.photo ?? ''} username={currentUser?.username ?? ''} />
				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click|preventDefault={logout} class="bordered no-underline hover:no-underline">
					<Icon icon={faSignOutAlt} />
					Logout
				</a>
			</li>
		</ul>
	</div>
</div>
