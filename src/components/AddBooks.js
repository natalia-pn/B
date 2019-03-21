import React, { Component } from 'react';
import SubmitButton from './SubmitButton';
import PropTypes from 'prop-types';


class AddBooks extends Component {
    render() {
        const { form, submitBook, getTitleValue, getAuthorValue, getGenreValue, getPriceValue } = this.props;
        return(
            <div className="Form__container">
                <form className="Add-books__form" ref={form}>
                    <label className="Form__title-label">Title: </label>
                    <input type="text" onKeyUp={getTitleValue}/> 

                    <label className="Form__author-label">Author: </label>
                    <input type="text" onKeyUp={getAuthorValue}/> 

                    <label className="Form__genre-label">Genre: </label>
                    <input type="text" onKeyUp={getGenreValue}/> 

                    <label className="Form__price-label">Price: </label>
                    <input type="text" onKeyUp={getPriceValue}/> 
                </form>
                <div className="Send-button__container">
                   <SubmitButton action={submitBook}/>
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