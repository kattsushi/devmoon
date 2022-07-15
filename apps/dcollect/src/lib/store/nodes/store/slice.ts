import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

interface INode {
	soul: string;
	name: string;
	type: string;
	fiekds: any;
	properties: any;
	createdBy: string;
	createdAt: string;
	updatedBy: string;
	updatedAt: string;
	softDeleted: boolean;
	active: boolean;
	deletedBy: string;
	deletedAt: string;
	version: number;
}

interface InitialState {
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	nodes: INode[];
	errorMessage: null;
}

const initialState: InitialState = {
	loading: 'idle',
	nodes: [],
	errorMessage: null
};

// Define initial state, slice name, and reducers
const nodesSlice = createSlice({
	name: 'nodes',
	initialState: {
		loading: false,
		nodes: [],
		errorMessage: null
	},
	reducers: {
		nodeUpdating(state) {
			state.loading = true;
		},
		nodeDeleted(state, action) {
			state.loading = false;
			state.errorMessage = null;
			state.nodes = state.nodes.filter((t) => t !== action.payload);
		},
		nodeError(state, action) {
			state.loading = false;
			state.errorMessage = action.payload;
		}
	}
});

// Export actions
export const { nodeUpdating, nodeDeleted, nodeError } = nodesSlice.actions;

// Export reducer by default for loading into configureStore
export default nodesSlice.reducer;
