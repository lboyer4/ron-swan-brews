import { breweryReducer } from './breweryReducer.js';
import { quotesReducer } from './quotesReducer.js';
import { searchReducer } from './searchReducer.js';
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

	it('should toggle favorite if brewery.id equals action.id', () => {
		const mockFalseBreweries = [
			{brewery: 'one',
			favorited: false,
			id: 1},
			{brewery: 'one',
			favorited: false,
			id: 2}
		];

		const mockTrueBreweries = [
			{brewery: 'one',
			favorited: false,
			id: 1},
			{brewery: 'one',
			favorited: true,
			id: 2}
		];

		const result = breweryReducer( mockFalseBreweries, actions.toggleFavorite(2));
		const expected = mockTrueBreweries;
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
			'quote two'
		];

		const result = quotesReducer(undefined, actions.setQuotes(expected));

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
		const result = searchReducer(undefined, actions.setSearch(expected));
		expect(result).toEqual(expected);
	});
});




