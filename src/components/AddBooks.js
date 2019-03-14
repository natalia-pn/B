import React, { Component } from 'react';


class AddBooks extends Component {
    render() {
        return(
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
        );   
    }
}

export default AddBooks;