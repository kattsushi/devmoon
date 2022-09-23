<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { authStore } from '$lib/store/auth'
	authStore.isLoggedIn.subscribe(() => {
		if (browser) {
			if (!authStore.isLoggedIn) {
				goto('/admin/dashboard')
			} else {
				goto('/login')
			}
		}
	})
</script>
