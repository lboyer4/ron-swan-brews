import React from 'react';
import { shallow } from 'enzyme';
import { BreweryHolder, mapStateToProps } from './index.js';


describe('BreweryHolder', () => {
	let wrapper;
	let mockBreweries;
	let mockQuotes;
	let mockSearch;

	beforeEach(() => {
		mockBreweries = [ 
			{
				brewery: 'brew1'
			},
			{
				brewery: 'brew2'
			}
		]

		mockQuotes = [
			'quote one',
			'quote two'
		]

		mockSearch = 'Denver';

		wrapper = shallow(
			<BreweryHolder
				breweries = {mockBreweries}
				quotes = {mockQuotes}
				search = {mockSearch}
			/>
		)
	})

	it('should match snapshots', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('mapStateToProps', () => {
		it('should return a object with a breweries array, a quotes array, and a search string', () => {

			const mockState = {
				breweries: ['one', 'two'],
				quotes: ['to be', 'not to be'],
				search: 'Denver'
			}

			const expected = {
				breweries: ['one', 'two'],
				quotes: ['to be', 'not to be'],
				search: 'Denver'
			}

			const mappedProps = mapStateToProps(mockState)

			expect(mappedProps).toEqual(expected)
		})

		it('should return a breweries object', () => {
			const mockState = {
				breweries: { breweries: mockBreweries }
			}
			const expected = {
				breweries: mockState.breweries
			}
			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected)
		});

		it('should return a quotes object', () => {
			const mockState = {
				quotes: { quotes: mockQuotes }
			}
			const expected = {
				quotes: mockState.quotes
			}
			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected);
		});

		it('should return a search object', () => {
			const mockState = {
				search: { search: mockSearch}
			}
			const expected = {
				search: mockState.search
			}
			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected);
		});
	});
});