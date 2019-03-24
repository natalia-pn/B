import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Menu extends Component {
    render() {
        const { toggleSubmitMessage } = this.props;

        return(
            <Fragment>
                <NavLink exact to="/" className="Show-books__link" activeClassName="is-active" onClick={toggleSubmitMessage}><p className="Show-books">Show books</p>
                </NavLink>
    
                <NavLink to="/AddBooks" className="Add-books__link" activeClassName="is-active" onClick={toggleSubmitMessage}><p className="Add-books__title">Add books</p></NavLink>
            </Fragment>
        ); 
    }
}

Menu.propTypes = {
    toggleSubmitMessage: PropTypes.func
}

export default Menu;

