export interface Column<T> {
	key: string
	title: string
	value: (row: T) => string | number
	renderValue?: (row: T) => string
	renderComponent?: any
	sortable?: boolean
	searchValue?: (row: T) => string
	filterValue?: (row: T) => string
	filterOptions?: string[] | ((row: T[]) => string[])
	headerClass?: string
	headerFilterClass?: string
}
