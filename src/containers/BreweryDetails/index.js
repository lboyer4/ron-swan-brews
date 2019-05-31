import React, { Component } from 'react';

class BreweryDetails extends Component {
	constructor() {
		super()
		this.state = {

		}
	}
	render() {
		const { name, brewery_type, city, street, phone } = this.props
		
		return (
			<div>
				<h2>{name}</h2>
				<p className="brew type">{brewery_type}</p>
				<h6 className="brew city">{city}</h6>
				<h6 className="brew street">{street}</h6>
				<h6 className="brew number">{phone}</h6>
			</div>
		)
	}
}

export default BreweryDetails;