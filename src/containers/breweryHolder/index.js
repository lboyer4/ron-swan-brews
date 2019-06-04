import React from 'react';
import Card from '../Card';
import { connect } from 'react-redux';
import './_BreweryHolder.scss';
import PropTypes from 'prop-types';

export const BreweryHolder = (props) => {
	let displayCards;
	console.log('searching', props.search)
	// componentDidMount = () => {
	if(props.search === 'Show All') {
		displayCards = props.breweries.map(brewery => {
			return <Card {...brewery} key={brewery.id}/>
		})
		} else {
			displayCards = props.breweries.map(brewery => {
				if(brewery.city === props.search) {
					return <Card {...brewery} />
				}
	// 	})
			})
		}
	// }
	// 	searchCities = (city) => {
	// 	console.log(city)
	// 	console.log(this.props.breweries)
	// 	const searchedCities = this.props.breweries.filter(brewery => {
	// 		return brewery.city === city
	// 	})
	// 	console.log(searchedCities)
	// }
	 
	// let showCard = props.search === 'Show All' && allCards;





	return (
		<section className="card-holder">
			<h1 className='quote'>"{props.quote}"</h1>
				{displayCards}
		</section>
	)
}
export const mapStateToProps = (state) => ({
	breweries: state.breweries,
	quote: state.quotes,
	search: state.search
});

export default connect(mapStateToProps)(BreweryHolder);

BreweryHolder.propTypes = {
	breweries: PropTypes.array,
	dispatch: PropTypes.func,
	history: PropTypes.object,
	location: PropTypes.object,
	match:PropTypes.object,
	quote:PropTypes.string,
	search: PropTypes.string
}