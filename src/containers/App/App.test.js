import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps, mapStateToProps } from './index.js';
import { setBreweries, setQuotes } from '../../actions';
import { fetchData } from '../../utils/fetch-data.js';

jest.mock('../../utils/fetch-data.js')
fetchData.mockImplementation(()=> Promise.resolve({ok: true}))

const noFavoriteBreweries = {	
	name: 'NOMNOM',
	brewery_type: 'micro',
	id: 1,
	city: 'Denver',
	street: 'market st.',
	phone: '800-555-5555'
}

const favoriteBreweries = {	
	name: 'NOMNOM',
	brewery_type: 'micro',
	id: 1,
	city: 'Denver',
	street: 'market st.',
	phone: '800-555-5555',
	favorited: false
}

const mockAddFavorite = jest.fn()

describe('App', () => {
	let wrapper;
	let mockSetBreweries;
	let mockSetQuotes;
	let mockAddFavorite

	beforeEach (() => {
		mockSetBreweries = jest.fn();
		mockSetQuotes = jest.fn();
		mockAddFavorite = jest.fn()

		wrapper = shallow(
			<App 
				setBreweries={mockSetBreweries}
				setQuotes={mockSetQuotes}
			/>
		)
	});

	it('should match snapshots', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('handleBreweries', () => {

		it('should fetch data with the correct params', () => {
			let mockUrl = 'https://api.openbrewerydb.org/breweries?by_state=colorado'
		
			const wrapper = shallow(<App />)
			wrapper.instance().handleBreweries();
		
			expect(fetchData).toHaveBeenCalledWith(mockUrl)
		})

		it('should return breweries with correct props', () => {
			const noFavoriteBreweries = {	
				name: 'NOMNOM',
				brewery_type: 'micro',
				id: 1,
				city: 'Denver',
				street: 'market st.',
				phone: '800-555-5555'
			}
			wrapper.instance().addFavorite([noFavoriteBreweries])
			expect(mockSetBreweries).toHaveBeenCalledWith([favoriteBreweries])
		})
	});

	describe('handleQuotes', () => {

		it('should fetch data with the correct params', () => {

		let mockUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/30'
		
			const wrapper = shallow(<App />)
			wrapper.instance().handleQuotes();
		
			expect(fetchData).toHaveBeenCalledWith(mockUrl)
		})

		it('should call setQuotes dispatch', () => {
			wrapper.instance().handleQuotes()
			expect(wrapper.instance().props.handleQuotes).toHaveBeenCalled
		});
	});

	describe('mapStateToProps', () => {
		it('should have an array object of breweries', () => {

			const mockState = {
				breweries: ['one', 'two'],
				quotes: ['to be', 'not to be'],
				search: 'Denver'
			}

			const expected = {
				breweries: ['one', 'two']
			}

			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected)

		})
	})

	describe('mapDispatchToProps', () => {
		it('should call setBreweries from MDTP', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = setBreweries([{brewery: 'name'}])
			const mappedProps = mapDispatchToProps(mockDispatch)

			mappedProps.setBreweries([{brewery: 'name'}])
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
		})

		it('should call setQuotes from MDTP', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = setQuotes(['quote'])
			const mappedProps = mapDispatchToProps(mockDispatch)

			mappedProps.setQuotes(['quote'])
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
		});
	});
})
