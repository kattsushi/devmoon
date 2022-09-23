<script lang="ts">
	import { ReactiveForm, type IReactiveFormBuilder, Button } from '@devmoon/ui'
	import { authStore } from '$lib/store/auth'
	import { goto } from '$app/navigation'
	const formBuilder: IReactiveFormBuilder = {
		formName: 'RegiserForm',
		fields: [
			{
				type: 'input',
				name: 'username',
				colSpan: 'col-span-full',
				attributes: {
					type: 'text',
					id: 'username',
					label: 'Username',
					placeholder: 'Username'
				}
			},
			{
				type: 'input',
				name: 'email',
				colSpan: 'col-span-full',
				attributes: {
					type: 'email',
					id: 'email',
					label: 'Email',
					placeholder: 'Email'
				}
			},
			{
				type: 'input',
				name: 'password',
				colSpan: 'col-span-full',
				value: '',
				attributes: {
					type: 'password',
					id: 'password',
					label: 'Password',
					placeholder: 'Password'
				}
			}
		]
	}

	function onSubmit(data: any) {
		const { values, valid } = data.detail
		if (valid) {
			const then = (res: any) => {
				goto(`/admin/dashboard`, { replaceState: true })
			}
			authStore.register({ ...values, then })
		}
	}
</script>

<ReactiveForm
	{formBuilder}
	submitButtonText="Register"
	on:onSubmit={onSubmit}
	hasCancelButton={false}
>
	<Button customClass="col-span-full" variant="ring-primary">
		<a class="btn btn-link col-span-full my-2" data-sveltekit-prefetch href="/">
			Already have an account? go to login
		</a>
	</Button>
</ReactiveForm>
