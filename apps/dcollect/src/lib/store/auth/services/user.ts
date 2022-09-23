import { decryptData, encryptData, gun, user } from '$lib/gundb'
export const generateGenericUserData = (date: any, username: string, email: string) => {
	return {
		followers: [],
		followed: [],
		books: {},
		photo: `https://avatars.dicebear.com/api/avataaars/${username}.svg`,
		email,
		createdAt: date,
		updatedAt: date
	}
}

export const createUser = async (username: string, email: string) => {
	return new Promise(async (resolve, reject) => {
		const newUserId = user.is.epub
		const genericUserData = generateGenericUserData(new Date().getTime(), username, email)
		const userData = await encryptData({
			uuid: newUserId,
			username,
			...genericUserData
		})
		const newUser = gun.get(newUserId).put({
			data: userData
		})

		newUser.once(async _user => {
			const user = await decryptData(_user?.data)
			resolve(user)
		})

		gun.get('users').set(newUser)
	})
}
