import React, { Component } from 'react';
import './_App.scss';
import Header from '../../components/Header';
import BreweryHolder from './../breweryHolder';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setBreweries, setQuotes } from '../../actions';
import { fetchData } from '../../utils/fetch-data.js';
import { Route } from 'react-router-dom';
import BreweryDetails from './../BreweryDetails';
import Card from '../Card';


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
				
				<Route path = '/' component = { Header } />
				<Route exact path = '/' component = { BreweryHolder } />
				<Route exact path = '/show-all' component = { BreweryHolder } render = {
					<Card {...this.props.breweries} />
				} />
				<Route exact path = '/breweries/:id' render = {( { match }) => {
					const selectedBrewery = this.props.breweries.find(brewery => {
						return brewery.id === parseInt(match.params.id)
					})
					if(selectedBrewery) {
						return <BreweryDetails
							{ ...selectedBrewery }
						/>
					}
				}}
				/>
{/*				<Header />
				<BreweryHolder />*/}
			</div>
		)
	}
}
export const mapStateToProps = (state) => ({
	breweries: state.breweries
})

export const mapDispatchToProps = (dispatch) => ({
	setBreweries: (breweries) => dispatch(setBreweries(breweries)),
	setQuotes: (quotes) => dispatch(setQuotes(quotes))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)