import React, { Component } from 'react';
import './_Icon.scss';
import ronswanIcon from '../../utils/images/ronswanIcon.png'

class Icon extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	render() {
		return (
			<div className="icon-holder">
				<nav>
					<img src={ronswanIcon} height="100px" alt="icon with an outline of ron swanson's face and hair" />
					<h1 className="title">RonSwanBreweries</h1>
				</nav>
				<p className="ronswan-quote">quote will eventually go here and wont that be nice</p>
			</div>
			)
	}
}

export default Icon;