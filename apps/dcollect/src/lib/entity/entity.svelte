<script lang="ts">
	import Breadcrumb from '$lib/shared/breadcrumb/breadcrumb.svelte';
	import { page } from '$app/stores';
</script>

<Breadcrumb path={$page.url.pathname.split('/').slice(1)} />

<h1>entity</h1>
