import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps, mapStateToProps } from './index.js';
import { setBreweries, setQuotes } from '../../actions';

describe('App', () => {
	let wrapper;
	let mockSetBreweries;
	let mockSetQuotes;

	beforeEach (() => {
		mockSetBreweries = jest.fn();
		mockSetQuotes = jest.fn();

		wrapper = shallow(
			<App 
				setBreweries={mockSetBreweries}
				setQuotes={mockSetQuotes}
			/>
		)
	})

	it('should match snapshots', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('handleBreweries', () => {

		it.skip('should fetch data with the correct params', () => {
			let mockUrl = 'https://api.openbrewerydb.org/breweries?by_state=colorado'
			const spy = jest.spyOn(App, 'fetchData');
			const wrapper = shallow(<App />)
			const instance= wrapper.instance();
			instance.handleBreweries();

			expect(spy).toHaveBeenCalled()
		})

		it('should call setBreweries dispatch', () => {
			wrapper.instance().handleBreweries()
			expect(wrapper.instance().props.setBreweries).toHaveBeenCalled
		});
	});

	describe('handleQuotes', () => {

		it.skip('should fetch data with the correct params', () => {
		})

		it('should call setQuotes dispatch', () => {
			wrapper.instance().handleQuotes()
			expect(wrapper.instance().props.handleQuotes).toHaveBeenCalled
		});
	});

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
