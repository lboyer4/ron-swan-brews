import React, { Component } from 'react';

class Card extends Component{
	constructor() {
		super();
		this.state = {

		}
	}
	render(props){
		const { name, city, phone, street, type } = this.props;
		console.log(this.props)
		return (
			<article className="brew-card"> 
				<h3 className="brew name">{name}</h3>
				<p className="brew type">{type}</p>
				<h6 className="brew city">{city}</h6>
				<h6 className="brew street">{street}</h6>
				<h6 className="brew number">{phone}</h6>
			</article>
			)
	}
}

export default Card;