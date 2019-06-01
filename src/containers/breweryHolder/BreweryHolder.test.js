import React from 'react';
import { shallow } from 'enzyme';
import { BreweryHolder, mapStateToProps } from './index.js';

let mockBreweries = [ 
	{
		brewery: 'brew1'
	},
	{
		brewery: 'brew2'
	}
]
describe('BreweryHolder', () => {
	let wrapper;
	let mockBreweries;

	beforeEach(() => {
		wrapper = shallow(
			<BreweryHolder
				breweries={mockBreweries}
			/>
		)
	})

	it.skip('should match snapshots', () => {
		expect(wrapper).toMatchSnapshot();
	})
})