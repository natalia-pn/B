import React, { Component } from 'react';


class ShowBooks extends Component {
    render() {

    const { filterBooks } = this.props;
        return(
            <div className="Books__container">
                <label className="Genre__label" placeholder="Search books by genre"></label>
                <input className="Genre__field"/>

                <label className="Title__label" placeholder="Search books by title"></label>
                <input className="Title__field"/>

                {filterBooks.map(book=>{
                    return(
                        <li className="Book__container">
                            <p className="Book__title">{book.title}</p>
                            <p className="Book__author">{book.author}</p>
                            <p className="Book__genre">{book.genre}</p>
                            <p className="Book__price">{book.price}</p>
                        </li>
                    )
                })}
            </div>
        );   
    }
}

export default ShowBooks;