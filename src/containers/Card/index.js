import React, { Component } from 'react';

class Card extends Component{
	constructor() {
		super();
		this.state = {

		}
	}
	render(){
		return (
			<article> 
				<h3>Title</h3>
				<p>BrewType</p>
				<h6>Address</h6>
				<h6>Phone Number</h6>
			</article>
			)
	}
}

export default Card;