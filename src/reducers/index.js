import { combineReducers } from 'redux';
import { breweryReducer } from './breweryReducer.js';
import { quotesReducer } from './quotesReducer.js';
import { searchReducer } from './searchReducer.js';

export const rootReducer = combineReducers ({
	breweries: breweryReducer,
	quotes: quotesReducer,
	search: searchReducer
});