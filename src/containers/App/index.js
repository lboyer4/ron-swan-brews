import React, { Component } from 'react';
import './_App.scss';
import Header from '../../components/Header';
import BreweryHolder from '../BreweryHolder';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setBreweries } from '../../actions'

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
	}

	setDispatchBreweries = (breweries) => {
		this.props.setBreweries(breweries)
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
	setBreweries: (breweries) => dispatch(setBreweries(breweries))
})

export default connect(null, mapDispatchToProps)(App)