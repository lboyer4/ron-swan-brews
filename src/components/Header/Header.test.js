import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../Header';


describe('Header', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<Header />
		);
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	});
});