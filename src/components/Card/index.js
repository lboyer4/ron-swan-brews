import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './_Card.scss';
import PropTyes from 'prop-types';

class Card extends Component{
	render(props){
		const { name, id } = this.props;
		return (
			<article className="brew-card"> 
				<NavLink to={`/breweries/${id}`} className="nav"><h3 className="brew-name">
						{name}
					</h3>
				</NavLink>
			</article>
		)
	};
};

export default Card;

Card.propTypes = {
	brewery_type: PropTyes.string,
	city: PropTyes.string,
	favorited: PropTyes.bool,
	id: PropTyes.number,
	name:PropTyes.string,
	phone: PropTyes.string,
	street:PropTyes.string,
}