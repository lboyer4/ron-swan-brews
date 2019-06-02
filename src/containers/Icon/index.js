import React, { Component } from 'react';
import './_Icon.scss';
import ronswanIcon from '../../utils/images/ronswanIcon.png'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearch } from '../../actions';
import PropTypes from 'prop-types';

export class Icon extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	clearSearch = () => {
		const clear = ''
		this.props.setSearch(clear)
	};

	render() {
		return (
			<div className="icon-holder">
				<nav>
					<Link to='/' onClick={this.clearSearch}>
					<img src={ronswanIcon} height="100px" alt="icon with an outline of ron swanson's face and hair" />
					</Link>
					<div className="title">
					<h1>RonSwanBreweries</h1>
				
				<h4 className="ronswan-quote">"Clear alcohols are for rich women on diets."</h4>
				<p> -Ron Swanson</p>
				</div>
				</nav>
			</div>
			);
	};
};

export const mapStateToProps = (state) => ({
	quotes: state.quotes
});

export const mapDispatchToProps = (dispatch) => ({
	setSearch: (search) => dispatch(setSearch(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(Icon);

Icon.propTypes = {
	quotes: PropTypes.array,
	setSearch: PropTypes.func
}
