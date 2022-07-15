// import { goto } from '$app/navigation';
import { gun, user, decryptData, handleAuthResponse } from '$lib/gundb';
import * as toolkitRaw from '@reduxjs/toolkit';
const { createAsyncThunk } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;
import { createUser } from '../services/user';

interface AuthPayload {
	username: string;
	email: string;
	password: string;
	option?: string;
	then?: Function;
}

export const setCurrentUser = createAsyncThunk('auth/setCurrentUser', async () => {
	return new Promise(async (resolve, reject) => {
		if (user?.is?.epub) {
			gun.get(user.is.epub).once(async (_user) => {
				const user = await decryptData(_user?.data);
				resolve(user);
			});
		} else {
			reject(null);
		}
	});
});

export const login = createAsyncThunk(
	'auth/login',
	async ({ username, email, password, option, then }: AuthPayload, { dispatch }) => {
		return new Promise((resolve, reject) => {
			user.auth(email, password, async (response: any) => {
				const res: string = handleAuthResponse(response);
				1;
				if (res !== 'error') {
					if (option === 'create-user') {
						const user: any = await createUser(username, email);
						resolve(user);
					} else {
						await dispatch(setCurrentUser());
						then && then();
					}
					then && then();
				} else {
					reject(res);
				}
			});
		});
	}
);

export const register = createAsyncThunk(
	'auth/register',
	async ({ username, email, password, then }: AuthPayload, { dispatch }) => {
		return new Promise((resolve, reject) => {
			user.create(email, password, (response: any) => {
				const res: string = handleAuthResponse(response);
				if (res !== 'error') {
					resolve(response);
					dispatch(login({ username, email, password, then, option: 'create-user' }));
				} else {
					reject(response);
				}
			});
		});
	}
);
