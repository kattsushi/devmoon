import type { IReactiveFormBuilder } from '@devmoon/components'

export interface IInitialState {
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	nodes: INode[]
	selectedNode: INode | null
	properties: IProperty[]
	selectedProperty: IProperty | null
	selectedPropertyIndex: number
	formConfig: IFormConfigProperty | null
	errorMessage: null
}

export interface INode {
	soul: string
	name: string
	type: string
	fiekds: any
	properties: any
	createdBy: string
	createdAt: string
	updatedBy: string
	updatedAt: string
	softDeleted: boolean
	active: boolean
	deletedBy: string
	deletedAt: string
	version: number
}
type TypeField =
	| 'input'
	| 'select'
	| 'text'
	| 'number'
	| 'boolean'
	| 'date'
	| 'time'
	| 'datetime'
	| 'image'
	| 'file'
	| 'geopoint'
	| 'geojson'
	| 'array'
	| 'object'

export interface IField {
	type: TypeField
	name: string
	value?: string
	rules?: string[]
	messages?: any
	attributes: any
	extra?: any
}

export interface IFormConfigProperty {
	form_name: string
	fields: IField[]
}

export interface IProperty {
	soul: string
	name: string
	isNew: boolean
	values: any
	isRequired: boolean
	isUnique: boolean
	formBuilder: IReactiveFormBuilder
}
