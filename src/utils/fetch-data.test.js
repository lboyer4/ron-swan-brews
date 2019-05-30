import { fetchData } from './fetch-data.js';
import { mockQuoteResponse } from './mockData.js';

describe('fetchData', () => {
	let mockUrl;

	beforeEach(() => {
		mockUrl = "'https://ron-swanson-quotes.herokuapp.com/v2/quotes/30'"

		window.fetch=jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: true,
				json: () => Promise.resolve(mockQuoteResponse)
			})
		});
	});

	it('should be called with the correct params', () => {
		const expected = mockUrl;
		fetchData(mockUrl);
		expect(window.fetch).toHaveBeenCalledWith(expected)
	});

	it('should return a response if the status is ok', async () => {
		const result = await fetchData()
		expect(result).toEqual(mockQuoteResponse)
	});

	it('should return an error if status is not ok', async () => {

		window.fetch=jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: false
			})
		});
		await expect(fetchData()).rejects.toEqual(Error('Error fetching data'));
	});
});