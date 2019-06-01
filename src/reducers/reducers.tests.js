import { breweryReducer } from './breweryReducer.js';
import * as actions from '../actions';

describe('breweryReducer', () => {
	it('should return initial state', () => {
		let expected = [];
		const result = breweryReducer(undefined, {});
		expect(result).toEqual(expected);
	});

	it('should return state with an array of breweries', () => {
		let breweries = [
			{brewery: 'one'},
			{brewery: 'two'}
		]

		const result = breweryReducer(undefined, actions.setBreweries(breweries));
		const expected = breweries;
		expect(result).toEqual(expected);
	});
});

describe('quotesReducer', () => {
	it('should return initial state', () => {
		let expected = [];
		const result = quotesReducer(undefined, {});
		expect(result).toEqual(expected)
	});

	it('should return state with and array of quotes', () => {
		let expected = [
			'quote one',
			'qhote two'
		];
		const result = quotesReducer(undefined, setQuotes(expected));

		expect(result).toEqual(expected);
	});
});

describe('searchReducer', () => {
	it('should return initial state', () => {
		let expected = '';
		const result = searchReducer(undefined, {});
		expect(result).toEqual(expected);
	});

	it('should return a string of a search query', () => {
		let expected = 'Denver';
		const result = searchReducer(undefined, setSearch(expected));
		expect(result).toEqual(expected);
	});
});

describe('rootReducer', () => {
	
})


