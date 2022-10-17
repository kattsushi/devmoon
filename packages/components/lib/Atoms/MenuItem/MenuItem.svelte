<script lang="ts">
	export let href: string
</script>

<li>
	<a class="pl-1" {href}>
		<slot />
	</a>
</li>
