import React, { Component } from 'react';
import './_Form.scss'
import { connect } from 'react-redux';
import { setSearch } from '../../actions';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Form extends Component {
	constructor() {
		super();
		this.state = {
			search: '',
			city: ''
		}
	}

	handleChange = (e) => {
		this.setState({ city: e.target.value})
	}

	handleClick = (e) => {
		e.preventDefault()
		this.setStoreSearch(this.state.city)
	}

	updateSearch = (e) => {
		this.setState({search: e.target.value})
		this.setStoreSearch(e.target.value)
	}

	setStoreSearch = (search) => {
		this.props.setSearch(search)
	}


	render(){
		return(
			<form>
				<label htmlFor="search"> Search Here </label>
				<input 
					type="text" 
					id="search"
					onChange={this.handleChange}
					value={this.state.city}
					name="city"
					placeholder="Search for breweries in a city near you..." />
				<div className="button-holder">
					<input onClick={this.handleClick}
						type="button"
						value="Search"
						className="search"
					/>
					<NavLink to="/show-all">
						<input 
							className="show-all"
							type="button" 
							name="Show All"
							value="Show All" 
							onClick={ this.updateSearch } />
					</NavLink>
					<NavLink to="/favorites">
						<input 
							className="show-favorites"
							type="button" 
							value="Show Favorites" 
							onClick={ this.updateSearch } />
					</NavLink>
				</div>
			</form>
			);
	};
};

export const mapDispatchToProps = (dispatch) => ({
	setSearch: (search) => dispatch(setSearch(search))
});

export default connect(null, mapDispatchToProps)(Form);

Form.propTypes = {
	setSearch: PropTypes.func
}