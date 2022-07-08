<script lang="ts">
	import { Breadcrumb } from '@devmoon-libs/ui';
	import { page } from '$app/stores';
</script>

<Breadcrumb path={$page.url.pathname.split('/').slice(1)} />

<h1>entity</h1>
