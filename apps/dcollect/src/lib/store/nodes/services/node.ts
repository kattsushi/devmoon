import { gun, user } from '$lib/gundb'
import { v4 as uuidv4 } from 'uuid'
import { decryptData, encryptData } from '$lib/gundb'
import type { INode } from '../types'

export const createNode = async (data: any): Promise<INode> => {
	return new Promise(async (resolve, reject) => {
		const userId = user.is.epub
		const currentNodes = gun.get('nodes')
		const soul = uuidv4()
		const date = new Date().getTime()

		const node: INode = await decryptData({
			soul,
			createBy: userId,
			createdAt: date,
			...data
		})

		const newNode = gun.get(soul).put({ data: node })

		currentNodes.set(newNode)
		return resolve(node as INode)
	})
}
