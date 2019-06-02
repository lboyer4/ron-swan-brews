import React, { Component } from 'react';
import './_BreweryDetails.scss';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';

export class BreweryDetails extends Component {
	constructor() {
		super()
		this.state = {

		}
	}

	handleFavorite = () => {
		this.props.toggleFavorite(this.props.id)
	}

	render() {
		const { name, brewery_type, city, street, phone } = this.props
		
		return (
			<section>
			<div className="big-card">
				<h2>{name}</h2>
				<p className="brew type">{brewery_type}</p>
				<h6 className="brew city">{city}</h6>
				<h6 className="brew street">{street}</h6>
				<h6 className="brew number">{phone}</h6>
				<button onClick={this.handleFavorite}>Favorite</button>
			</div>
			</section>
		)
	}
}

export const mapDispatchToProps = (dispatch) => ({
	toggleFavorite: (id) => dispatch(toggleFavorite(id))
})

export default connect(null, mapDispatchToProps)(BreweryDetails);

