import React, { Component, Fragment } from 'react';
import logo from '../logo.png';
import PropTypes from 'prop-types';

class BookCard extends Component {
    render() {
        const { id, title, author, genre, price, removeBook, updateBooksWindow } = this.props;

        return(
            <Fragment>
                <li className="Book__card">
                    <div className="Book-top__container">
                        <div className="Book__logo-container">
                            <img className="Book__logo"  src={logo} alt="logo"></img>
                        </div>
                        
                        <div className="Action-buttons__container">
                            <button type="button" className="Edit-button" value={id} onClick={updateBooksWindow}><i className="fas fa-pen"></i></button>
                            <button type="button" className="Delete-button" value={id} onClick={removeBook}><i className="fas fa-trash-alt"></i></button>
                        </div>
                    </div>

                    <div className="Book__info">
                        <p className="Book__title">{title}</p>
                        <p className="Book__author">{author}</p>
                        <p className="Book__genre">{genre}</p>
                        <p className="Book__price">{price}</p>
                    </div>
                </li>
            </Fragment>
        );   
    }
}

BookCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    price: PropTypes.string,
    removeBook: PropTypes.func,
    updateBooksWindow: PropTypes.func
}

export default BookCard;






