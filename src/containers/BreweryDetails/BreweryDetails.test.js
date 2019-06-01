import React from 'react';
import { shallow } from 'enzyme';
import { BreweryDetails } from '../BreweryDetails';

describe('BreweryDetails', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<BreweryDetails
			/>
		);
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	});
});