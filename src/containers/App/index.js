import React, { Component } from 'react';
import './_App.scss';
import Header from '../../components/Header';
import BreweryHolder from '../BreweryHolder';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setBreweries, setQuotes } from '../../actions'

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
    .then(breweries => this.setDispatchBreweries(breweries))

    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/30')
    .then(response => response.json())
    .then(quotes => this.setDispatchQuotes(quotes))
  	}

	setDispatchBreweries = (breweries) => {
		this.props.setBreweries(breweries)
	}

	setDispatchQuotes = (quotes) => {
		this.props.setQuotes(quotes)
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

const mapDispatchToProps = (dispatch) => ({
	setBreweries: (breweries) => dispatch(setBreweries(breweries)),
	setQuotes: (quotes) => dispatch(setQuotes(quotes))
})

export default connect(null, mapDispatchToProps)(App)