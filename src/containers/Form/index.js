import React, { Component } from 'react';

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
				<div>
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