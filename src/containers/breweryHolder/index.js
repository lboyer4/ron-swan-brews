import React from 'react';
import Card from '../../components/Card';
import { connect } from 'react-redux';
import './_BreweryHolder.scss';
import PropTypes from 'prop-types';

export const BreweryHolder = (props) => {
	let displayCards;
	if(props.search === 'Show All') {
		displayCards = props.breweries.map(brewery => {
			return <Card {...brewery} key={brewery.id}/>
		})
		} else {
			displayCards = props.breweries.reduce((acc, brewery) => {
				if(brewery.city === props.search) {
					acc.push(<Card {...brewery} key={brewery.id} />)
				}
				return acc;
			}, [])
		}

	let min = Math.ceil(1);
  let max = Math.floor(30);
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
	let quote = props.quotes[randomNum];

	return (
		<section className="card-holder">
			<h1 className='quote'>"{quote}"</h1>
				{displayCards}
		</section>
	)
}
export const mapStateToProps = (state) => ({
	breweries: state.breweries,
	quotes: state.quotes,
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