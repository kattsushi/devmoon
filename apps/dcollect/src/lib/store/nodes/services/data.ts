import type { IField } from '@devmoon/ui/src/components/molecules/reactive-form/reactive-form.types'
import type { IProperty } from '../types'

import textHeight from 'svelte-awesome/icons/textHeight'
import hashtag from 'svelte-awesome/icons/hashtag'
import calendar from 'svelte-awesome/icons/calendar'
import toggleOn from 'svelte-awesome/icons/toggleOn'
import envelopeO from 'svelte-awesome/icons/envelopeO'
import link from 'svelte-awesome/icons/link'
import listUl from 'svelte-awesome/icons/listUl'
import tags from 'svelte-awesome/icons/tags'
import file from 'svelte-awesome/icons/file'
import shareAlt from 'svelte-awesome/icons/shareAlt'
import userCircle from 'svelte-awesome/icons/userCircle'

const fields = [
	{
		type: 'input',
		name: 'name',
		rules: ['required'],
		messages: {
			required: ' '
		},
		attributes: {
			classes: ['form-control', 'input', 'input-bordered', 'w-full'],
			type: 'text',
			id: 'name',
			label: 'Name',
			placeholder: 'Name here'
		}
	}
]

export const defaultFields = (value: string): IField[] => [
	{
		colSpan: 'col-span-full',
		type: 'select',
		name: 'type',
		value,
		rules: ['required'],
		messages: {
			required: ' '
		},
		attributes: {
			id: 'type',
			label: 'Type',
			required: true
		},
		extra: {
			options: [
				{
					value: 'text',
					label: 'Text',
					icon: textHeight
				},
				{
					value: 'number',
					label: 'Number',
					icon: hashtag
				},
				{
					value: 'bool',
					label: 'Boolean',
					icon: toggleOn
				},
				{
					value: 'date',
					label: 'Date',
					icon: calendar
				},
				{
					value: 'email',
					label: 'Email',
					icon: envelopeO
				},
				{
					value: 'url',
					label: 'Url',
					icon: link
				},
				{
					value: 'multiselect',
					label: 'Multi Select',
					icon: listUl
				},
				{
					value: 'json',
					label: 'JSON',
					icon: tags
				},
				{
					value: 'file',
					label: 'File',
					icon: file
				},
				{
					value: 'reference',
					label: 'Reference',
					icon: shareAlt
				},
				{
					value: 'user',
					label: 'User',
					icon: userCircle
				}
			]
		}
	},
	{
		colSpan: 'col-span-full',
		type: 'input',
		name: 'nameField',
		value: '',
		rules: ['required'],
		messages: {
			required: 'this field is required'
		},
		attributes: {
			type: 'text',
			id: 'nameField',
			label: 'Name',
			placeholder: 'Name here',
			autofocus: true,
			required: true
		}
	}
]

export const textFields: IField[] = [
	{
		colSpan: 'col-span-full',
		type: 'input',
		name: 'min',
		attributes: {
			type: 'number',
			id: 'min',
			label: 'Min',
			placeholder: 'Min Characters'
		}
	},
	{
		colSpan: 'col-span-full',
		type: 'input',
		name: 'max',
		attributes: {
			type: 'number',
			id: 'max',
			label: 'Max',
			placeholder: 'Max Characters'
		}
	},
	{
		colSpan: 'col-span-full',
		type: 'input',
		name: 'regex',
		attributes: {
			type: 'text',
			id: 'regex',
			label: 'Regex Pattern',
			placeholder: 'eg. /^[a-zA-Z0-9]*$/'
		}
	}
]

export const numberFields: IField[] = [
	{
		colSpan: 'col-span-full',
		type: 'input',
		name: 'min',
		attributes: {
			type: 'number',
			id: 'min',
			label: 'Min',
			min: '0',
			placeholder: 'Min Characters'
		}
	},
	{
		colSpan: 'col-span-full',
		type: 'input',
		name: 'max',
		attributes: {
			type: 'number',
			id: 'max',
			label: 'Max',
			max: '340',
			placeholder: 'Max Characters'
		}
	}
]

export const defaultProperty = (value: string, i: number): IProperty => ({
	soul: '',
	name: `property${i}`,
	isNew: false,
	values: {},
	isRequired: true,
	isUnique: true,
	formBuilder: {
		formName: `NodePropertyForm${i}`,
		fields: [...defaultFields(value), ...textFields]
	}
})

export const NodeFormFields: IField[] | undefined = [
	{
		colSpan: 'col-span-full',
		type: 'input',
		name: 'name',
		rules: ['required'],
		messages: {
			required: ' '
		},
		attributes: {
			type: 'text',
			id: 'name',
			label: 'Name',
			placeholder: 'Name here'
		}
	}
]
