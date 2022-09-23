<script lang="ts">
	import { Button, ReactiveForm, type IReactiveFormBuilder } from '@devmoon/ui'
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
					label: 'Email or Username',
					placeholder: 'Email or Username',
					required: true
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
					label: 'Password',
					placeholder: 'Password',
					required: true
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

<ReactiveForm {formBuilder} submitButtonText="Login" on:onSubmit={onSubmit} hasCancelButton={false}>
	<Button customClass="col-span-full" variant="ring-primary">
		<a data-svektekit-prefetch href="/register"> Register </a>
	</Button>
</ReactiveForm>
