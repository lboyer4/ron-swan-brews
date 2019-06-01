import React, { Component } from 'react';
import './_BreweryDetails.scss';

class BreweryDetails extends Component {
	constructor() {
		super()
		this.state = {

		}
	}
	render() {
		const { name, brewery_type, city, street, phone } = this.props
		
		return (
			<section cardName="background-big">
			<div className="big-card">
				<h2>{name}</h2>
				<p className="brew type">{brewery_type}</p>
				<h6 className="brew city">{city}</h6>
				<h6 className="brew street">{street}</h6>
				<h6 className="brew number">{phone}</h6>
			</div>
			</section>
		)
	}
}

export default BreweryDetails;