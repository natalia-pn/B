import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Menu from './Menu';

class Header extends Component {
    render() {
        const { logo, toggleSubmitMessage} = this.props;

        return(
            <header className="App__header">
                <div className="Header-content__container">
                    <div className="Logo__container">
                    <NavLink to="/" className="Home-link"><img className="Logo"  src={logo} alt="logo"></img></NavLink>
                    
                    <p className="App__name">Beezy bookstore</p>
                    </div>
        
                    <div className="App__menu">
                    <Menu toggleSubmitMessage={toggleSubmitMessage} />
                    </div>
                </div>
            </header>
        )
    }
}


export default Header;
