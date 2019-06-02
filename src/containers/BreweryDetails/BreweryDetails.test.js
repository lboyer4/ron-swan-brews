import React from 'react';
import { shallow } from 'enzyme';
import { BreweryDetails, mapDispatchToProps } from '../BreweryDetails';
import { toggleFavorite } from '../../actions';

describe('BreweryDetails', () => {
	let wrapper;
	let mockToggleFavorite;

	beforeEach(() => {
		mockToggleFavorite = jest.fn()

		wrapper = shallow(
			<BreweryDetails
				toggleFavorite={mockToggleFavorite}
			/>
		);
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	});

	it('should call dispatch when using a function from MDTP', () => {
		const mockId = 1
		const mockDispatch = jest.fn();
		const actionToDispatch = toggleFavorite(mockId);
		const mappedProps = mapDispatchToProps(mockDispatch);

		mappedProps.toggleFavorite(1)

		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});
});