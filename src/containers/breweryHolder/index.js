import React from 'react';
import Card from '../Card';
import { connect } from 'react-redux'

export const BreweryHolder = (props) => {
	let brewCard = props.breweries.map(brewery => {
			return <Card {...brewery} key={brewery.id}/>
		})
	
	return (
		<section className="card-holder">
			{brewCard}
		</section>
	)
}

const mapStateToProps = (state) => ({
	breweries: state.breweries
})

export default connect(mapStateToProps)(BreweryHolder);