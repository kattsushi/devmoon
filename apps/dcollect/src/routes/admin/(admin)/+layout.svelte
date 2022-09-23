<script lang="ts">
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { goto } from '$app/navigation'
	import { Drawer, DrawerSide, Logo, Navbar, Sidebar } from '@devmoon/ui'
	// import '../../../theme.css';
	import '../../../app.css'

	import thLarge from 'svelte-awesome/icons/thLarge'
	import connectdevelop from 'svelte-awesome/icons/connectdevelop'
	import sliders from 'svelte-awesome/icons/sliders'
	import { authStore } from '$lib/store/auth'

	const { isLoggedIn } = authStore
	onMount(() => {
		authStore.setCurrentUser(() => {
			if (!$isLoggedIn) {
				goto('/')
			}
		})
	})

	function handleLogout() {
		authStore.logout()
		goto('/')
	}

	let checked = false
	function toogleDrawer(): void {
		checked = !checked
	}

	interface Items {
		name: string
		icon: any
		href: string
	}

	let sidebarItems: Items[] = [
		{
			name: 'Dashboard',
			icon: thLarge,
			href: '/admin/dashboard'
		},
		{
			name: 'Nodes',
			icon: connectdevelop,
			href: '/admin/nodes'
		},
		{
			name: 'Entitie Detail',
			icon: sliders,
			href: '/admin/nodes/1'
		}
	]
</script>

<svelete:head>
	<title>Admin</title>
</svelete:head>

{#if isLoggedIn}
	<Drawer {checked} on:toggleDrawer={toogleDrawer}>
		<svelte:fragment slot="main-content">
			<Navbar on:toogleDrawer={toogleDrawer} />
			<slot />
		</svelte:fragment>

		<Sidebar
			slot="sidebar"
			on:toogleDrawer={toogleDrawer}
			pathname={$page.url.pathname}
			user={null}
			{sidebarItems}
			on:logout={handleLogout}
		/>

		<DrawerSide
			slot="drawer-side"
			{sidebarItems}
			on:onLogoClick={toogleDrawer}
			on:onLogoutClick={handleLogout}
		>
			<Logo slot="logo" logo={'Dcollect'} />
		</DrawerSide>
	</Drawer>
{/if}
