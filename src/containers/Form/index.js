import React, { Component } from 'react';
import './_Form.scss'

class Form extends Component {
	constructor() {
		super();
		this.state = {
			search: ''
		}
	}

	updateSearch = (value) => {
		console.log(value)
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
					<input type="button" value="Show All" onClick={this.updateSearch} />
					<button> 
						Show Favorites
					</button>
				</div>
			</form>
			)
	}
}

export default Form; 