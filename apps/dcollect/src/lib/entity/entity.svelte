<script lang="ts">
	import { Breadcrumb } from '@devmoon-libs/ui';
	export let page: any;
</script>

<Breadcrumb path={page.url.pathname.split('/').slice(1)} />

<h1>entity</h1>
