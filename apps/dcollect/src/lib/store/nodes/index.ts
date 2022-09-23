export * from './types'
import { writable, type Writable } from 'svelte/store'
import type { IFormConfigProperty, INode, IProperty } from './types'
import type { LoadingState } from '../common.types'
import { createNode } from './services/node'
import { defaultFields, defaultProperty, numberFields, textFields } from './services/data'
import type { IReactiveFormBuilder } from '@devmoon/ui'

class NodeStore {
	constructor(
		public nodes: Writable<INode[]> = writable([]),
		public selectedNode: Writable<INode | null> = writable(null),
		public properties: Writable<IProperty[]> = writable([]),
		public selectedPropertyIndex: Writable<number | null> = writable(0),
		public formBuilder: Writable<IReactiveFormBuilder | null> = writable(null),
		public isLoggedIn: Writable<boolean> = writable(false),
		public loading: Writable<LoadingState> = writable('idle'),
		public errorMessage: Writable<string | null> = writable(null)
	) {
		this.properties.subscribe(console.log)
	}

	public async createNode({ name, properties }: INode) {
		this.loading.set('pending')
		try {
			const node = await createNode({ name, properties })
			this.nodes.update(nodes => [...nodes, node])
			this.loading.set('idle')
		} catch (error: any) {
			this.loading.set('failed')
			this.errorMessage.set(error.message)
		}
	}

	public addProperty() {
		this.properties.update(properties => {
			const newProperty = [...properties, defaultProperty('text', properties.length)]
			this.selectedPropertyIndex.set(newProperty.length - 1)
			return newProperty
		})
	}

	public updatePropertySelected(index: number, formName?: string, values?: any) {
		let newProperties: IProperty[]
		this.properties.update(properties => {
			if (formName) {
				const newProperty: IProperty = {
					...properties[index],
					name: formName,
					values,
					formBuilder: {
						...properties[index].formBuilder,
						formName,
						fields: [
							...(properties[index]?.formBuilder?.fields?.map(field => {
								// if (field.name === 'nameField') {
								// 	field.value = formName;
								// }
								for (const prop in values) {
									if (Object.prototype.hasOwnProperty.call(values, prop)) {
										const element = values[prop]
										if (field.name === prop) {
											field.value = element
										}
									}
								}
								console.log('field', field)
								return field
							}) || [])
						]
					}
				}
				newProperties = [...properties]
				for (let i = 0; i < properties.length; i++) {
					if (index === i) {
						newProperties[i] = newProperty
					}
				}
			} else {
			}
			this.properties.set(newProperties)
			return newProperties
		})
	}

	public updatedPropertyIndexSelected(index: number | null) {
		this.selectedPropertyIndex.set(index)
	}

	public removeProperty(index: number) {
		this.properties.update(properties => {
			const newProperties = [...properties]
			newProperties.splice(index, 1)
			this.selectedPropertyIndex.set(null)
			return newProperties
		})
	}

	public updateProperty(index: number, property: IProperty) {
		this.properties.update(properties => {
			const newProperty: IProperty = {
				...properties[index],
				name: property.values.nameField,
				values: property.values,
				formBuilder: {
					...properties[index].formBuilder,
					formName: property.formBuilder.formName,
					fields: [
						...(properties[index]?.formBuilder?.fields?.map(field => {
							for (const prop in property.values) {
								if (property.values.hasOwnProperty(prop)) {
									const element = property.values[prop]
									if (field.name === prop) {
										field.value = element
									}
								}
							}
							console.log(`property.values['nameField']`, property.values['nameField'])
							console.log(`property.values['nameField']`, field.name === 'nameField')
							if (field.name === 'nameField') {
								field.value = property.values['nameField']
							}
							return field
						}) || [])
					]
				}
			}
			const newProperties = [...properties]
			newProperties[index] = newProperty
			return newProperties
		})
	}

	updatePropertySelectedType(index: number, type: string) {
		this.properties.update(properties => {
			const newProperties = [...properties]

			switch (type) {
				case 'number':
					const newSelectedProperty = {
						...newProperties[index],
						name: '',
						formConfig: {
							...newProperties[index].formBuilder,
							fields: [...defaultFields(type), ...numberFields]
						}
					}
					for (let i = 0; i < properties.length; i++) {
						if (index === i) {
							newProperties[i] = newSelectedProperty
						}
					}
					break
				case 'text':
					const newSelectedProperty2 = {
						...newProperties[index],
						formConfig: {
							...newProperties[index].formBuilder,
							fields: [...defaultFields(type), ...textFields]
						}
					}
					for (let i = 0; i < properties.length; i++) {
						if (index === i) {
							newProperties[i] = newSelectedProperty2
						}
					}
			}
			return newProperties
		})
	}
}

// Export a singleton
export const nodeStore = new NodeStore()

// Allow for multiple stores (good for contexts)
// export const createMyFormStore = () => new MyFormStore();
