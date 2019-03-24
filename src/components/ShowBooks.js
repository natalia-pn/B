import React, { Component, Fragment } from 'react';
import BookCard from './BookCard';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class ShowBooks extends Component {
    render() {

        const { filterBooks, getSearchGenre, getSearchName, removeBook, updateBooksWindow, refreshPage } = this.props;

        if (filterBooks.length === 0 ) {
            return (
                <div className="No-results-message__container">
                    <p className="No-results-message">There are no results that match your search</p>

                    <button type="button" onClick={ refreshPage }><Link to="/" className="go-back-link">Take me back</Link></button> 
                </div>
            )
        } else {

            return(
                <Fragment>
                    <div className="Search-fields__container">
                        <label className="Genre__label"></label>
                        <input type="text" className="Genre__field" placeholder="Search books by genre" onKeyUp={getSearchGenre}/>

                        <label className="Title__label"></label>
                        <input type="text" className="Title__field" placeholder="Search books by title" onKeyUp={getSearchName}/>
                    </div>

                    <div className="Books__container">
                        {filterBooks.map((book, index)=>{
                            book.id = index;
                            return(
                                <BookCard key={book.id} id={book.id}  title={book.title} author={book.author} genre={book.genre} price={book.price} removeBook={removeBook} updateBooksWindow={updateBooksWindow}/>
                            )
                        })}
                    </div>
                </Fragment>
            );   
        }
    }
}

ShowBooks.propTypes = {
    filterBooks: PropTypes.array,
    getSearchGenre: PropTypes.func,
    getSearchName: PropTypes.func,
    removeBook: PropTypes.func
}

export default ShowBooks;