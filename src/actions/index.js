export const setBreweries = (breweries) => ({
	type: 'SET_BREWERIES',
	breweries
});	

export const toggleFavorite = (id) => ({
	type: 'TOGGLE_FAVORITE', 
	id
})

export const setQuotes = (quotes) => ({
	type: 'SET_QUOTES',
	quotes
});

export const setSearch = (search) => ({
	type: 'SET_SEARCH',
	search
});