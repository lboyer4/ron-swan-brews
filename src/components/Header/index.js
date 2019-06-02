import React from 'react';
import Form from '../../containers/Form';
import './_Header.scss';
import Icon from '../../containers/Icon';
import PropTypes from 'prop-types';


const Header = () => {
	return (
		<header className="header">
			<Icon />
			<Form />
		</header>
		)
};

export default Header;

Header.propTypes = {
	history: PropTypes.object,
	location: PropTypes.object,
	match: PropTypes.object
};