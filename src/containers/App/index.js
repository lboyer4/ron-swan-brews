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
import FavoritesHolder from '../FavoritesHolder';


export class App extends Component {
	constructor() {
		super();
		this.state = {
			quote: '',
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
  		.then(breweries => this.addFavorite(breweries))
  	}

  	addFavorite = (breweries) => {
  		let newBrews = breweries.map(brewery => {
  			return {
  				name: brewery.name,
  				brewery_type: brewery.brewery_type,
  				id: brewery.id,
  				city: brewery.city,
  				street: brewery.street,
  				phone: brewery.phone,
  				favorited: false
  			}
  		})
  		this.props.setBreweries(newBrews)
  	}


  	handleQuotes = () => {
  		const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/30';
  		fetchData(url)
  		.then(quotes => this.makeQuote(quotes))
  	}

  	makeQuote = (quotes) => {
		let min = Math.ceil(1);
	  let max = Math.floor(30);
	  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		this.setState({quote: quotes[randomNum]});
		this.props.setQuotes(this.state.quote)
	}

	render() {
		return(
			<div>
				<Route path = '/' component = { Header } />
				<h1>{this.state.quote}</h1>
				<Route exact path = '/' component = { BreweryHolder } />
				<Route exact path = '/show-all' component = { BreweryHolder } 
				 />
				<Route exact path ='/favorites' 
					component = { FavoritesHolder }
				/>
				<Route exact path = '/show-city' component = { BreweryHolder } 
				 />
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
			</div>
		)
	}
}
export const mapStateToProps = (state) => ({
	breweries: state.breweries
})

export const mapDispatchToProps = (dispatch) => ({
	setBreweries: (breweries) => dispatch(setBreweries(breweries)),
	setQuotes: (quote) => dispatch(setQuotes(quote))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
	breweries: PropTypes.array,
	setBreweries: PropTypes.func,
	setQuotes: PropTypes.func
}