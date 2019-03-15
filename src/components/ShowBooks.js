import React, { Component, Fragment } from 'react';


class ShowBooks extends Component {
    render() {

    const { filterBooks, getSearchGenre, getSearchName, removeBook } = this.props;

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
                        return(
                            <li className="Book__card" key={index}>
                                <div className="Action-buttons__container">
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
            </Fragment>
           
        );   
    }
}

export default ShowBooks;