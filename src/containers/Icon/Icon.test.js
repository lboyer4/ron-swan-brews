import React from 'react';
import { shallow } from 'enzyme';
import { Icon, mapStateToProps, mapDispatchToProps } from '../Icon';
import { setSearch } from '../../actions';

describe('Icon', () => {
	let wrapper;
	let mockSetSearch;
	let mockQuotes;

	beforeEach(() => {
		mockSetSearch = jest.fn()
		mockQuotes = ['one', 'two']
		wrapper = shallow(
			<Icon 
				setSearch = {mockSetSearch}
				quotes = {mockQuotes}
			/>
		)
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
	describe('clearSearch', () => {
		it('should clear search', () => {
			wrapper = shallow(
				<Icon
					search= ''
					setSearch={jest.fn()}
				/>)
			wrapper.instance().clearSearch()
			expect(wrapper.instance().props.setSearch).toHaveBeenCalled()
		});
	});

	describe('mapStateToProps', () => {
		it('should return a props array of quotes', () => {
			const mockState = {quotes: ['quote1', 'quote2']}
			const expected = {quotes: ['quote1', 'quote2']}
			const mappedProps = mapStateToProps(mockState)

			expect(mappedProps).toEqual(expected);
		})
	})
});