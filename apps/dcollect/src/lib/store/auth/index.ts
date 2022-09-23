import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import { decryptData, gun, handleAuthResponse, user } from '$lib/gundb'
import { createUser } from './services'
import type { LoadingState } from '../common.types'

interface IAuthPayload {
	username: string
	email: string
	password: string
	option?: string
	then?: Function
}

interface IUser {
	photo?: string
	username: string
	email: string
	picture?: string
}
class AuthStore {
	constructor(
		public user: Writable<IUser | null> = writable(null),
		public isLoggedIn: Writable<boolean> = writable(false),
		public loading: Writable<LoadingState> = writable('idle'),
		public errorMessage: Writable<string | null> = writable(null)
	) {}

	setCurrentUser(cb: () => void = () => {}) {
		if (user?.is?.epub) {
			gun.get(user.is.epub).once(async _user => {
				const user = await decryptData(_user?.data)
				this.user.set(user)
				this.isLoggedIn.set(true)
				cb()
			})
		} else {
			this.user.set(null)
			this.isLoggedIn.set(false)
			cb()
		}
	}

	login({ username, email, password, option, then }: IAuthPayload) {
		this.loading.set('pending')
		user.auth(email, password, async (response: any) => {
			const res: string = handleAuthResponse(response)
			if (res !== 'error') {
				if (option === 'create-user') {
					const user: any = await createUser(username, email)
					this.user.set(user)
				} else {
					this.setCurrentUser()
				}
				then && then()
			} else {
				this.errorMessage.set(res)
			}
			this.loading.set('succeeded')
		})
	}

	register({ username, email, password, then }: IAuthPayload) {
		this.loading.set('pending')
		user.create(email, password, (response: any) => {
			const res: string = handleAuthResponse(response)
			if (res !== 'error') {
				this.login({ username, email, password, option: 'create-user', then })
			} else {
				this.errorMessage.set(res)
			}
			this.loading.set('succeeded')
		})
	}

	logout() {
		user.leave()
		window.location.reload()
		this.user.set(null)
		this.isLoggedIn.set(false)
		this.errorMessage.set(null)
	}
}

// Export a singleton
export const authStore = new AuthStore()

// Allow for multiple stores (good for contexts)
// export const createMyFormStore = () => new MyFormStore();
