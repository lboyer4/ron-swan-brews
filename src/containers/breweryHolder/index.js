import React from 'react';
import Card from '../Card';
import { connect } from 'react-redux'
import './_BreweryHolder.scss'

export const BreweryHolder = (props) => {
	let allCards = props.breweries.map(brewery => {
			return <Card {...brewery} key={brewery.id}/>
		})
	let showCard = props.search === 'Show All' && allCards
	

	//randomnumber quote
	let min = Math.ceil(1);
  let max = Math.floor(30);
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
	let quote = props.quotes[randomNum]

	return (
		<section className="card-holder">
			<h1 className='quote'>"{quote}"</h1>
			{showCard}
		</section>
	)
}

const mapStateToProps = (state) => ({
	breweries: state.breweries,
	quotes: state.quotes,
	search: state.search
})

export default connect(mapStateToProps)(BreweryHolder);