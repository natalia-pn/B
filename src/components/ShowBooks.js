import React, { Component } from 'react';


class ShowBooks extends Component {
    render() {

    const { filterBooks, getSearchGenre, getSearchName, removeBook } = this.props;

    console.log(filterBooks)
        return(
            <div className="Books__container">
                <label className="Genre__label"></label>
                <input type="text" className="Genre__field" placeholder="Search books by genre" onKeyUp={getSearchGenre}/>

                <label className="Title__label"></label>
                <input type="text" className="Title__field" placeholder="Search books by title" onKeyUp={getSearchName}/>

                {filterBooks.map((book, index)=>{
                    return(
                        <li className="Book__container" key={index}>
                            <div className="action-buttons__container">
                                <button type="button" className="Edit-button" value={book.id}>Edit</button>
                                <button type="button" className="Delete-button" value={book.id} onClick={removeBook}>Delete</button>
                            </div>
                            <div className="Book__info">
                                <p className="Book__title">{book.title}</p>
                                <p className="Book__author">{book.author}</p>
                                <p className="Book__genre">{book.genre}</p>
                                <p className="Book__price">{book.price}</p>
                            </div>
                        </li>
                    )
                })}
            </div>
        );   
    }
}

export default ShowBooks;