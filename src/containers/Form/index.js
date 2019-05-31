import React, { Component } from 'react';
import './_Form.scss'

class Form extends Component {
	constructor() {
		super();
		this.state = {
			search: ''
		}
	}

	updateSearch = (e) => {
		console.log(e.target.value)
	}


	render(){
		return(
			<form>
				<label htmlFor="search"> Search Here </label>
				<input type="text" id="search"
				placeholder="Search for breweries in a city near you..." />
				<div className="button-holder">
					<button>
						Search
					</button>
					<input type="button" value="Show All" onClick={this.updateSearch} />
					<input type="button" value="Show Favorites" onClick={this.updateSearch } />
				</div>
			</form>
			)
	}
}

export default Form; 