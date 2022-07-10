<script lang="ts">
	import { Form } from '@devmoon-libs/ui';
	import { store, login } from '@devmoon-dcollect-libs/store';
	import { goto } from '$app/navigation';
	const form_name: string = 'LoginForm';
	const fields = [
		{
			type: 'input',
			name: 'email',
			attributes: {
				classes: ['form-control', 'input', 'input-bordered', 'w-full'],
				type: 'text',
				id: 'username',
				label: 'Email or Username',
				placeholder: 'Email or Username'
			}
		},
		{
			type: 'input',
			name: 'password',
			value: '',
			attributes: {
				classes: ['form-control', 'input', 'input-bordered', 'w-full'],
				type: 'password',
				id: 'password',
				label: 'Password',
				placeholder: 'Password'
			}
		}
	];

	function onSubmit(data: any) {
		const { values, valid } = data;
		const then = (res: any) => {
			goto(`/admin`, { replaceState: true });
		};
		if (valid) {
			store.dispatch(login({ ...values, option: 'login', then }));
		}
	}
</script>

<Form {form_name} {fields} submitButtonText="Login" onSubmitForm={onSubmit} hasCancelButton={false}>
	<a class="btn btn-secondary my-2" sveltekit:prefetch href="/register"> Register </a>
</Form>
