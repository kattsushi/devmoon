<script lang="ts">
	import { themeChange } from 'theme-change'
	import { Background, Hero } from '@devmoon/ui'
	import '../../app.css'

	import { authStore } from '$lib/store/auth'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'

	const { isLoggedIn } = authStore
	onMount(() => {
		themeChange(false)
		authStore.setCurrentUser(() => {
			if ($isLoggedIn) {
				goto('/admin/dashboard')
			}
		})
	})
</script>

<main>
	<Background>
		<Hero>
			<svelte:fragment slot="left">
				<div class="text-center lg:text-left">
					<div class="flex w-full sm:max-w-sm">
						<slot />
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="right">
				<h1 class="text-secondary text-5xl font-bold">Login now!</h1>
				<p class="text-primary py-6">
					Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
					exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
				</p>
			</svelte:fragment>
		</Hero>
		<!-- <div class="hero min-h-screen bg-base-200">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<div class="text-center lg:text-left">
				<div class="flex w-full sm:max-w-sm">
					<slot />
				</div>
			</div>
		</div> -->
	</Background>
</main>
