import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Card extends Component{
	constructor() {
		super();
		this.state = {

		}
	}
	render(props){
		const { name, city, phone, street, brewery_type, id } = this.props;
		return (
			<article className="brew-card"> 
				<NavLink to={`/breweries/${id}`} className="nav"><h3 className="brew name">
						{name}
					</h3>
				</NavLink>
				<p className="brew type">{brewery_type}</p>
				<h6 className="brew city">{city}</h6>
				<h6 className="brew street">{street}</h6>
				<h6 className="brew number">{phone}</h6>
				<button> favorite </button>
			</article>
		)
	}
}

export default Card;