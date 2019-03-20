import React, { Component, Fragment } from 'react';

class BookCard extends Component {
    render() {
        const { id, title, author, genre, price, removeBook } = this.props;

        return(
            <Fragment>
                <li className="Book__card">
                    <div className="Action-buttons__container">
                        <button type="button" className="Edit-button" value={id}>Edit</button>
                        <button type="button" className="Delete-button" value={id} onClick={removeBook}>Delete</button>
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

export default BookCard;





