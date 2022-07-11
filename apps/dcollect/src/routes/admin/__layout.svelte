<script lang="ts">
	import { Drawer } from '@devmoon-libs/ui';
	import '../../app.css';

	import { store, useSelector, authSelectors, setCurrentUser } from '@devmoon-dcollect-libs/store';
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
	<Drawer page={$page}>
		<!-- Page content here -->
		<slot />
	</Drawer>
{/if}
