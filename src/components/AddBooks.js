import React, { Component } from 'react';


class AddBooks extends Component {
    render() {
        return(
            <div className="Form__container">
                <form className="Add-books__form">
                    <label className="Form__title-label">Title: </label>
                    <input type="text"/> 

                    <label className="Form__author-label">Author: </label>
                    <input type="text"/> 

                    <label className="Form__genre-label">Genre: </label>
                    <input type="text"/> 

                    <label className="Form__price-label">Price: </label>
                    <input type="text"/> 
                </form>
                <label className="send-books__label"></label>
                <input type="submit" className="Send-books__button"/>
            </div>
        );   
    }
}

export default AddBooks;