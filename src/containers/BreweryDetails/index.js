import React, { Component } from 'react';
import './_BreweryDetails.scss';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';
import PropTypes from 'prop-types';

export class BreweryDetails extends Component {
	handleFavorite = () => {
		this.props.toggleFavorite(this.props.id);
	};

	render() {
		const { name, brewery_type, city, street, phone, favorited } = this.props;
		let favText = favorited ? 'Unfavorite' : 'Favorite';
		
		return (	
			<section>
			<div className={favorited ? "favorited" : "big-card"} >
				<h1>{name}</h1>
				<h4 className="brew type">Brewery Type: {brewery_type}</h4>
				<h4 className="brew city">City: {city}</h4>
				<h4 className="brew street">Street: {street}</h4>
				<h4 className="brew number">Phone: {phone}</h4>
				<button className="favorite-btn" onClick={this.handleFavorite}>{favText}</button>
			</div>
			</section>
		);
	};
};

export const mapDispatchToProps = (dispatch) => ({
	toggleFavorite: (id) => dispatch(toggleFavorite(id))
});

export default connect(null, mapDispatchToProps)(BreweryDetails);

BreweryDetails.propTypes = {
	brewery_type: PropTypes.string,
	city: PropTypes.string,
	favorited: PropTypes.bool, 
	id: PropTypes.number,
	name: PropTypes.string,
	phone: PropTypes.string,
	street: PropTypes.string,
	toggleFavorite: PropTypes.func
};
