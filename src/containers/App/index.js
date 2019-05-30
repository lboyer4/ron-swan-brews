import React, { Component } from 'react';
import './_App.scss';
import Header from '../../components/Header';
import BreweryHolder from '../BreweryHolder';

class App extends Component {
	constructor() {
		super();
		this.state = {
			quotes: [],
			breweries: []
		}
	}

	componentDidMount = () => {
		fetch('https://api.openbrewerydb.org/breweries?by_state=colorado')
    .then(response => response.json())
    .then(breweries => this.setState({ breweries }))
	}

	render() {
		return(
			<div>
				<Header />
				<BreweryHolder />
			</div>
		)
	}
}

export default App;