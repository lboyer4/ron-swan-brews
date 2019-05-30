import React, { Component } from 'react';
import './_Form.scss'

class Form extends Component {
	constructor() {
		super();
		this.state = {
			search: ''
		}
	}

	render(){
		return(
			<form>
				<label for="search"> Search Here </label>
				<input type="text" id="search"
				placeholder="Search for breweries in a city near you..." />
				<div className="button-holder">
					<button>
						Search
					</button>
					<button>
						Show All
					</button>
					<button> 
						Show Favorites
					</button>
				</div>
			</form>
			)
	}
}

export default Form; 