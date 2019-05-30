import { shallow } from 'enzyme';
import { App, mapDispatchToProps, mapStateToProps } from './index.js';

describe('App', () => {
	let wrapper;
	let mockSetBreweries;
	let mockSetQuotes;

	beforeEach (() => {
		mockSetBreweries = jest.fn()
		mockSetQuotes = jest.fn()

		wrapper = shallow(
			<App 
				setBreweries={mockSetBreweries}
				setQuotes={mockSetQuotes}
				/>
			)
	})

	it('should match snapshots', () => {
		
	})
})
