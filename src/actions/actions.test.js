import * as actions from '../actions';

describe('actions', () => {
	let mockBreweries;
	let mockQuotes;
	let mockSearch;

	beforeEach(() => {
		mockBreweries = [
			{ brewery: 'brewone'},
			{ brewery: 'brewtwo'}
		];
		mockQuotes = [
			'quote one',
			'quote two'
		];
		mockSearch = 'Denver';
	});

	describe('SET_BREWERIES', () => {
		it('should create an action object with a type of SET_BREWERIES', () => {
			const expected = 'SET_BREWERIES'
			const results = actions.setBreweries(mockBreweries);

			expect(results.type).toBe(expected);
		});

		it('should have a property of breweries', () => {
			const expected = mockBreweries;
			const results = actions.setBreweries(mockBreweries);
			
			expect(results.breweries).toEqual(expected);
		});
	});

	describe('SET_QUOTES', () => {
		it('should create an action object with a type of SET_QUOTES', () => {
			const expected = 'SET_QUOTES';
			const results = actions.setQuotes(mockQuotes);

			expect(results.type).toBe(expected);
		});

		it('should have a property of quotes', () => {
			const expected = mockQuotes;
			const results = actions.setQuotes(mockQuotes);

			expect(results.quotes).toEqual(expected);
		});
	});

	describe('SET_SEARCH', () => {
		it('should create an action object with a type of SET_SEARCH', () => {
			const expected = 'SET_SEARCH';
			const results = actions.setSearch(mockSearch);

			expect(results.type).toBe(expected);
		});

		it('should have a property of search', () => {
			const expected = mockSearch;
			const results = actions.setSearch(mockSearch);

			expect(results.search).toEqual(expected);
		});
	});
});