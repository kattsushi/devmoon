<script lang="ts">
	import { themeChange } from 'theme-change';
	import Background from '@devmoon-libs/ui/src/components/background/background.svelte';
	import '../app.css';
	import store, { useSelector } from '$lib/store/store';
	import { setCurrentUser } from '$lib/store/auth/store/actions';
	import { authSelectors } from '$lib/store/auth/store/selectors';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		themeChange(false);
		store.dispatch(setCurrentUser()).then(() => {
			if (isLoggedIn) {
				goto('/admin/dashboard');
			}
		});
	});

	$: isLoggedIn = useSelector(
		authSelectors.isLoggedIn,
		(isLoggedInStore: any) => (isLoggedIn = isLoggedInStore)
	);
</script>

<main>
	<Background>
		<div class="hero min-h-screen bg-base-200">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<div class="text-center lg:text-left">
					<h1 class="text-5xl font-bold text-secondary">Login now!</h1>
					<p class="py-6 text-primary">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
				</div>
				<slot />
			</div>
		</div>
	</Background>
</main>
