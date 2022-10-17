<script lang="ts">
	type OwnProps = {
		background?: string
		withShadow: boolean
	}
	type $$Props = OwnProps

	export let background: OwnProps['background'] = 'bg-base-100'
	export let withShadow: OwnProps['withShadow'] = false
	// export let color = 'text-white'
</script>

<div class={`card card-body ${withShadow ? 'shadow-2xl' : ''} !${background}`}>
	<slot />
</div>
