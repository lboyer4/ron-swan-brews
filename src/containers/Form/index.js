import React, { Component } from 'react';
import './_Form.scss'
import { connect } from 'react-redux';
import { setSearch } from '../../actions';

class Form extends Component {
	constructor() {
		super();
		this.state = {
			search: '',
			city: ''
		}
	}

	updateSearch = (e) => {
		this.setState({search: e.target.value})
		this.setSearch(e.target.value)
	}

	setSearch = (search) => {
		console.log(search)
		this.props.setSearch(search)
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
					<input type="button" value="Show All" onClick={ this.updateSearch } />
					<input type="button" value="Show Favorites" onClick={ this.updateSearch } />
				</div>
			</form>
			)
	}
}

export const mapDispatchToProps = (dispatch) => ({
	setSearch: (search) => dispatch(setSearch(search))
})

export default connect(null, mapDispatchToProps)(Form)