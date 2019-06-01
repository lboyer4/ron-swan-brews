import React from 'react';
import { shallow } from 'enzyme'
import { Form, mapDispatchToProps } from '../Form';
import { setSearch } from '../../actions';

describe('Form', () => {
	let wrapper;
	let mockSetSearch;

	beforeEach(() => {
		mockSetSearch = jest.fn();

		wrapper = shallow(
			<Form 
				setSearch={mockSetSearch}
			/>
		)
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('handleChange', () => {

		it('should set city state when handle change is called', () => {
			const mockCityEvent = {
				target: {
					name: "city",
					value: "Denver"
				}
			}
			wrapper.instance().handleChange(mockCityEvent)
			expect(wrapper.state().city).toEqual("Denver")
		});
	});

	describe('handleClick', () => {

		it('should call setSearch when clicked', () => {
			const mockClickEvent = {
				preventDefault: () => {}
			};
			const mockExpected = 'Denver';
			const mockState = {
				search: 'Denver'
			}
			wrapper.setState(mockState);
			wrapper.instance().handleClick(mockClickEvent);
			expect(wrapper.state().search).toEqual(mockExpected);
		});
	});

	describe('updateSearch', () => {
		it('should set state when called', () => {
			const mockSearchEvent = {
				target: {
					name: "Show All",
					value: "Show All"
				}
			}
			wrapper.instance().updateSearch(mockSearchEvent);
			expect(wrapper.state().search).toEqual("Show All");
		});

		it('should call setSearch', () => {
			const mockSubmitEvent = {
				preventDefault: () => {}
			};
			const mockExpected = 'Show All';
			const mockState = {
				search: 'Show All'
			}
			wrapper.setState(mockState);
			wrapper.instance().handleClick(mockSubmitEvent);
			expect(wrapper.state().search).toEqual(mockExpected);
		});
	});

	describe('setStoreSearch', () => {
		it('should dispatch setSearch', () => {
			const mockSetSearch = jest.fn();
			const mockSearch = {
				search: 'Denver'
			}
			wrapper = shallow(
			<Form 
				search= 'Denver'
				city= 'Denver'
				setSearch={jest.fn()}
			/>
		)
			wrapper.instance().setStoreSearch('Denver')
			expect(wrapper.instance().props.setSearch).toHaveBeenCalledWith('Denver')
		})
	})
	
});