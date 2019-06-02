import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './_Card.scss';

class Card extends Component{
	constructor() {
		super();
		this.state = {

		}
	}
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
	}
}

export default Card;