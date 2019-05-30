import { combineReducers } from 'redux';
import { breweryReducer } from './breweryReducer.js';
import { quotesReducer} from './quotesReducer.js';

export const rootReducer = combineReducers ({
	breweries: breweryReducer,
	quotes: quotesReducer
});