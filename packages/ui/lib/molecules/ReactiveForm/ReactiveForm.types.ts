export type FieldType =
	| 'input'
	| 'textarea'
	| 'checkbox'
	| 'select'
	| 'radio'
	| 'date'
	| 'multi-select'
export type FieldRule = 'required' | 'min' | 'max' | 'pattern' | 'email' | 'url' | 'password'
export interface IFieldAttributes {
	class?: string[]
	type?: string
	id?: string
	label?: string
	placeholder?: string
	required?: boolean
	disabled?: boolean
	autocomplete?: string
}
export type IField = {
	colSpan?: string
	type?: FieldType
	name: string
	rules?: FieldRule[]
	value?: string
	messages?: any
	attributes?: IFieldAttributes | HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
	extra?: {
		options: any[]
		[key: string]: any
	}
}
export type Fields = IField[] | undefined

export interface IFieldsComponents {
	[key: string | 'class']: any
}

export interface GroupFieldOptions {
	name: string
	label: string
	fields: IField[] | undefined
	values: any
	formName: string
}
export interface IReactiveFormBuilder {
	fields?: IField[] | undefined
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
	formName?: string
	formValidators?: any
	values?: any
	groupsFormsOptions?: GroupFieldOptions
}
