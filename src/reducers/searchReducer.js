const initialState = '';

export const searchReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'SET_SEARCH':
			return action.search
		default:
			return state
	}
}