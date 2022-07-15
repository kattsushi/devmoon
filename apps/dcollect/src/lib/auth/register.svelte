<script lang="ts">
	import { Form } from '@devmoon-libs/ui';
	import store, { useSelector } from '$lib/store/store';
	import { register } from '$lib/store/auth/store/actions';
	import { goto } from '$app/navigation';
	const form_name: string = 'RegiserForm';
	const fields = [
		{
			type: 'input',
			name: 'username',

			attributes: {
				classes: ['form-control', 'input', 'input-bordered', 'w-full'],
				type: 'text',
				id: 'username',
				label: 'Username',
				placeholder: 'Username'
			}
		},
		{
			type: 'input',
			name: 'email',

			attributes: {
				classes: ['form-control', 'input', 'input-bordered', 'w-full'],
				type: 'text',
				id: 'username',
				label: 'Email',
				placeholder: 'Email'
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
		if (valid) {
			const then = (res: any) => {
				goto(`/admin`, { replaceState: true });
			};
			store.dispatch(register({ ...values, then }));
		}
	}
</script>

<Form
	{form_name}
	{fields}
	submitButtonText="Register"
	onSubmitForm={onSubmit}
	hasCancelButton={false}
>
	<a class="btn btn-link my-2" sveltekit:prefetch href="/">
		Already have an account? go to login
	</a>
</Form>
