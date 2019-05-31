import React, { Component } from 'react';
import './_App.scss';
import Header from '../../components/Header';
import BreweryHolder from './../breweryHolder';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setBreweries, setQuotes } from '../../actions';
import { fetchData } from '../../utils/fetch-data.js';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			quotes: [],
			breweries: []
		}
	}

	componentDidMount = () => {
		this.handleBreweries()
		this.handleQuotes()
  	}

  	handleBreweries = () => {
  		const url = 'https://api.openbrewerydb.org/breweries?by_state=colorado'
  		fetchData(url)
  		.then(breweries => this.props.setBreweries(breweries))
  	}

  	handleQuotes = () => {
  		const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/30';
  		fetchData(url)
  		.then(quotes => this.props.setQuotes(quotes))
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

export const mapDispatchToProps = (dispatch) => ({
	setBreweries: (breweries) => dispatch(setBreweries(breweries)),
	setQuotes: (quotes) => dispatch(setQuotes(quotes))
})

export default connect(null, mapDispatchToProps)(App)