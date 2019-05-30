import React from 'react';
import Card from '../Card';
import { connect } from 'react-redux'

export const BreweryHolder = (props) => {
	let brewCard = props.breweries.map(brewery => {
			return <Card {...brewery} key={brewery.id}/>
		})
	let min = Math.ceil(1);
  let max = Math.floor(30);
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
	let quote = props.quotes[randomNum]

	return (
		<section className="card-holder">
			<h1>"{quote}"</h1>
			{brewCard}
		</section>
	)
}

const mapStateToProps = (state) => ({
	breweries: state.breweries,
	quotes: state.quotes
})

export default connect(mapStateToProps)(BreweryHolder);