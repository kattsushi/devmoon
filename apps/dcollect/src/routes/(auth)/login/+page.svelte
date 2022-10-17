<script lang="ts">
	import { Button, ReactiveForm, type IReactiveFormBuilder } from '@devmoon/components'
	import { authStore } from '$lib/store/auth'
	import { goto } from '$app/navigation'

	const formBuilder: IReactiveFormBuilder = {
		formName: 'LoginForm',
		fields: [
			{
				colSpan: 'col-span-full',
				type: 'input',
				name: 'email',
				attributes: {
					type: 'text',
					id: 'username',
					placeholder: ' ',
					required: true
				},
				extra: {
					label: 'Email or Username'
				}
			},
			{
				colSpan: 'col-span-full',
				type: 'input',
				name: 'password',
				value: '',
				rules: ['required', 'password'],
				messages: {
					required: 'Please enter your password here is required',
					password: 'Please enter A valid password'
				},
				attributes: {
					type: 'password',
					id: 'password',
					placeholder: ' ',
					required: true,
					class: 'w-full'
				},
				extra: {
					label: 'Password'
				}
			}
		]
	}

	function onSubmit(data: any) {
		const { values, valid } = data.detail
		console.log(values, valid)
		const then = (res: any) => {
			goto(`/admin/dashboard`, { replaceState: true })
		}
		if (valid) {
			authStore.login({ ...values, option: 'login', then })
		}
	}
</script>

<svelte:head>
	<title>Login Dcollect App</title>
	<meta name="description" content="Dcollect App" />
</svelte:head>

<ReactiveForm {formBuilder} submitButtonText="Login" on:onSubmit={onSubmit} hasCancelButton={false}>
	<div class="col-span-full">
		<Button href="/register" background="none" class="w-full">Register</Button>
	</div>
</ReactiveForm>
