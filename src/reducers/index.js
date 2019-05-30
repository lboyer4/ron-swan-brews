import { combineReducers } from 'redux';
import { breweryReducer } from './breweryReducer.js';

export const rootReducer = combineReducers ({
	breweries: breweryReducer
});