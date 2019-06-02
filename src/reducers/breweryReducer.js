const initialState = [];

export const breweryReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_BREWERIES':
			return action.breweries
		case 'TOGGLE_FAVORITE':
			return state.map(brewery => {
				if(brewery.id === action.id) {
					const favorited = !brewery.favorited
					return { ...brewery, favorited }
				} else {
					return brewery
				}
			})
		default: 
			return state
	}
} 