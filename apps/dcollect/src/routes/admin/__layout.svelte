<script lang="ts">
	import { Drawer } from '@devmoon-libs/ui';
	import { Modals, closeModal } from 'svelte-modals';
	import '../../app.css';

	import store, { useSelector } from '$lib/store/store';
	import { setCurrentUser } from '$lib/store/auth/store/actions';
	import { authSelectors } from '$lib/store/auth/store/selectors';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	onMount(() => {
		store.dispatch(setCurrentUser()).then(() => {
			if (!isLoggedIn) {
				goto('/');
			}
		});
	});
	$: isLoggedIn = useSelector(
		authSelectors.isLoggedIn,
		(isLoggedInStore: any) => (isLoggedIn = isLoggedInStore)
	);
</script>

<svelete:head>
	<title>Admin</title>
</svelete:head>

{#if isLoggedIn}
	<Modals>
		<div slot="backdrop" class="backdrop" on:click={closeModal} />
	</Modals>
	<Drawer page={$page}>
		<!-- Page content here -->
		<slot />
	</Drawer>
{/if}

<style>
	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}
</style>
