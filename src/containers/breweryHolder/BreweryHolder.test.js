import React from 'react';
import { shallow } from 'enzyme';
import { BreweryHolder, mapStateToProps } from './index.js';


describe('BreweryHolder', () => {
	let wrapper;
	let mockBreweries;
	let mockQuotes;

	beforeEach(() => {
		let mockBreweries = [ 
			{
				brewery: 'brew1'
			},
			{
				brewery: 'brew2'
			}
		]

		let mockQuotes = [
			'quote one',
			'quote two'
		]

		wrapper = shallow(
			<BreweryHolder
				breweries = {mockBreweries}
				quotes = {mockQuotes}
			/>
		)
	})

	it('should match snapshots', () => {
		expect(wrapper).toMatchSnapshot();
	})
})