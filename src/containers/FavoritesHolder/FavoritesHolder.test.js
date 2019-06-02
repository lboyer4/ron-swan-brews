import React from 'react';
import { shallow } from 'enzyme';
import { FavoritesHolder, mapStateToProps } from '../FavoritesHolder';

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
	});

	it('should return a brewery object', () => {
		const mockState = {
			breweries: { breweries: mockBreweries }
		}

		const expected = {
			breweries: mockState.breweries
		}

		const mappedProps = mapStateToProps(mockState);

		expect(mappedProps).toEqual(expected)	
	});
});