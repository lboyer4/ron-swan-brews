const initialState = []

export const quotesReducer =(state=initialState, action) => {
	switch(action.type) {
		case 'SET_QUOTES':
			return action.quotes 
		default: 
			return state
	}
}