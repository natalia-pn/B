import React, { Component } from 'react';
import SubmitButton from './SubmitButton';
import PropTypes from 'prop-types';

class AddBooks extends Component {
    render() {
        const { form, submitBook, getTitleValue, getAuthorValue, getGenreValue, getPriceValue, submitMessage } = this.props;
        return(
            <div className="Form__container">
                <form className="Add-books__form" ref={form}>
                    <label htmlFor="title" className="Form__title-label">Title </label>
                    <input id="title" className="Form__title-input" type="text" onKeyUp={getTitleValue}/> 

                    <label htmlFor="author" className="Form__author-label">Author </label>
                    <input id="author" className="Form__author-input" type="text" onKeyUp={getAuthorValue}/> 

                    <label htmlFor="genre" className="Form__genre-label">Genre </label>
                    <input id="genre" className="Form__genre-input" type="text" onKeyUp={getGenreValue}/> 

                    <label htmlFor="price" className="Form__price-label">Price </label>
                    <input id="price" className="Form__price-input" type="text" onKeyUp={getPriceValue}/> 
                </form>

                <div className="Send-button__container">
                   <SubmitButton action={submitBook}/>
                </div>

                <div className={`Submission-message__container ${submitMessage}`}>
                    <p className="Submission-message">The book was submitted successfully</p>
                </div>
            </div>
        );   
    }
}

AddBooks.propTypes = {
    form: PropTypes.object,
    submitBook: PropTypes.func,
    getTitleValue: PropTypes.func,
    getAuthorValue: PropTypes.func,
    getGenreValue: PropTypes.func,
    getPriceValue: PropTypes.func
    }

export default AddBooks;