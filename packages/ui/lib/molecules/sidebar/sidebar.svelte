<script lang="ts">
	import Icon from '../../atoms/Icon/Icon.svelte'
	import signOut from 'svelte-awesome/icons/signOut'
	import { createEventDispatcher } from 'svelte'
	import ToggleTheme from '../ToggleTheme/ToggleTheme.svelte'
	import Logo from '../../atoms/Logo/logo.svelte'
	import Divider from '../../atoms/Divider/divider.svelte'
	import Avatar from '../../atoms/Avatar/Avatar.svelte'

	export let sidebarItems: any[]
	export let user: any
	export let pathname: string

	const dispatch = createEventDispatcher()

	const handleLogout = () => {
		dispatch('logout')
	}

	const toogleDrawer = () => {
		dispatch('toogleDrawer')
	}

	const handgleNavClick = (path: string) => {
		window.location.assign(path)
	}
</script>

<div class="hidden h-full sm:flex">
	<div class="flex-column menu bg-base-100 rounded-box h-full p-2.5 pt-2" style="width: 70px;">
		<div on:click|preventDefault={toogleDrawer}>
			<Logo />
		</div>
		<!-- svelte-ignore missing-declaration -->
		<Divider isHorizontal={true} />
		<ul>
			{#each sidebarItems as { href, icon }}
				<li class="mt-1 py-1" class:active={pathname.includes(href)}>
					<a sveltekit:reload {href}>
						<Icon {icon} />
					</a>
				</li>
			{/each}
		</ul>
		<div class="mt-auto">
			<div class="p-2 pl-0">
				<ToggleTheme />
			</div>
			<ul>
				<li>
					<div class="p-2">
						<Avatar picture={user?.photo ?? ''} />
					</div>
					<button on:click|preventDefault={handleLogout}>
						<Icon icon={signOut} />
					</button>
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
