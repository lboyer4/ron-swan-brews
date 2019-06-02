import React from 'react';
import { shallow } from 'enzyme';
import { FavoritesHolder } from '../FavoritesHolder';

describe('FavoritesHolder'
, () => {
	let wrapper;
	let mockBreweries;

	beforeEach(() => {
		mockBreweries = [
			{brewery: 'one',
			favorited: false,
			id: 1},
			{brewery: 'one',
			favorited: false,
			id: 2}
		];

		wrapper = shallow(
			<FavoritesHolder 
				breweries={mockBreweries}
			/>
		)
	});

	it('should match snapshots', () => {
		expect(wrapper).toMatchSnapshot()
	})
});