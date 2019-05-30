const initialState = [];

export const breweryReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_BREWERIES':
			return action.breweries
		default: 
			return state
	}
}