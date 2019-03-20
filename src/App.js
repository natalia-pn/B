import React, { Component, Fragment } from 'react';
import logo from './logo.png';
import './App.css';
import AddBooks from './components/AddBooks';
import ShowBooks from './components/ShowBooks';
import Menu from './components/Menu';
import { Route, Switch } from 'react-router-dom';
import UpdateBooksModal from './components/UpdateBooksModal';

let booksList= [
  {
    title: 'El calor tan cercano',
    author: 'Maruja Torres',
    genre: 'autobiographical',
    price: '16 €'
  },
  {
    title: 'Un corazón helado',
    author: 'Almudena Grandes',
    genre: 'historical novel',
    price: '18 €'
  },
  {
    title: 'Il barone rampante',
    author: 'Italo Calvino',
    genre: 'fiction novel',
    price: '20 €'
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      formInfo: {
        title: '',
        author: '',
        genre: '',
        price: ''
      },
      nameValue: '',
      genreValue: '', 
      booksArray: booksList,
      bookToUpdate: {},
      isOpen: false,
    }

    this.form = React.createRef();

    this.getTitleValue = this.getTitleValue.bind(this);
    this.getAuthorValue = this.getAuthorValue.bind(this);
    this.getGenreValue = this.getGenreValue.bind(this);
    this.getPriceValue = this.getPriceValue.bind(this);
    this.submitBook = this.submitBook.bind(this);
    this.getSearchName = this.getSearchName.bind(this);
    this.getSearchGenre = this.getSearchGenre.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.updateBooksWindow = this.updateBooksWindow.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
 

  getTitleValue(e) {
    const { formInfo } = this.state;
    const newFormInfo = { ...formInfo, title: e.currentTarget.value };
    this.setState({ formInfo: newFormInfo });
  }

  getAuthorValue(e) {
    const { formInfo } = this.state;
    const newFormInfo = { ...formInfo, author: e.currentTarget.value };
    this.setState({ formInfo: newFormInfo });
  }

  getGenreValue(e) {
    const { formInfo } = this.state;
    const newFormInfo = { ...formInfo, genre: e.currentTarget.value };
    this.setState({ formInfo: newFormInfo });
  }

  getPriceValue(e) {
    const { formInfo } = this.state;
    const newFormInfo = { ...formInfo, price: e.currentTarget.value };
    this.setState({ formInfo: newFormInfo });
  }

  submitBook(e) {
    e.preventDefault();
    booksList.push(this.state.formInfo);
    this.setState({
      formInfo: {
        title: '',
        author: '',
        genre: '',
        price: ''
      },
   })
   this.form.current.reset();
  }

  getSearchName(e) {
    const nameValue = e.currentTarget.value;
    this.setState({
      nameValue: nameValue
    })
  }

  getSearchGenre(e) {
    const genreValue = e.currentTarget.value;
    this.setState({
      genreValue: genreValue
    })
  }

  filterBooks() {
    const { genreValue, nameValue, booksArray} = this.state;

      return booksArray
      .filter(book => book.genre.toUpperCase().includes(genreValue.toUpperCase()))
      .filter(book => book.title.toUpperCase().includes(nameValue.toUpperCase()));
  }

  removeBook(e) {
    const buttonValue = e.currentTarget.value;

    for (const book of booksList) {
      if(parseInt(buttonValue) === book.id) {
        const index = booksList.findIndex(x => x.id  === parseInt(buttonValue));
        booksList.splice(index, 1);
      }
    }
    this.setState({booksArray: booksList})
  }

  updateBooksWindow(e) {
    const buttonValue = e.currentTarget.value;

    for (const book of booksList) {
      if(parseInt(buttonValue) === book.id) {
        const index = booksList.findIndex(x => x.id  === parseInt(buttonValue));
        const book = booksList[index];
 
        this.setState({bookToUpdate: book})
      }
    }
    this.toggleModal();
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render() {
    console.log(this.state.bookToUpdate)

    const { getTitleValue, getAuthorValue, getGenreValue, getPriceValue, submitBook, getSearchName, getSearchGenre, filterBooks, removeBook, form, updateBooksWindow } = this;

    const { bookToUpdate } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <div className="Logo__container">
            <img className="Logo"  src={logo} alt="logo"></img>
          </div>
          <div className="App__menu">
            <Menu />
          </div>
        </header>

        <main className="App__main-section">
          <Switch>
            <Fragment>
              <Route exact path="/" render={()=>(
                <ShowBooks 
                getSearchName={getSearchName} 
                getSearchGenre={getSearchGenre}  filterBooks= {filterBooks()} removeBook={removeBook} updateBooksWindow={updateBooksWindow}/>
              )}/>
              <Route path="/AddBooks" render={()=>(<AddBooks getTitleValue={getTitleValue}getAuthorValue={getAuthorValue} getGenreValue={getGenreValue} getPriceValue={getPriceValue} submitBook={submitBook} form={form}/>)}/>
            </Fragment>
          </Switch>
        </main>

        <UpdateBooksModal show={this.state.isOpen} onClose={this.toggleModal}>
          <div className="Form__container">
            <form className="Add-books__form" ref={form}>
                <label className="Form__title-label">Title: </label>
                <input type="text" onKeyUp={getTitleValue} placeholder={`Edit: ${bookToUpdate.title}`}/> 

                <label className="Form__author-label">Author: </label>
                <input type="text" onKeyUp={getAuthorValue} placeholder={`Edit: ${bookToUpdate.author}`}/> 

                <label className="Form__genre-label">Genre: </label>
                <input type="text" onKeyUp={getGenreValue} placeholder={`Edit: ${bookToUpdate.genre}`}/> 

                <label className="Form__price-label">Price: </label>
                <input type="text" onKeyUp={getPriceValue} placeholder={`Edit: ${bookToUpdate.price}`}/> 
            </form>

            <div className="Update-button__container">
                <label className="Update-books__label"></label>
                <input type="submit" className="Update-books__button" 
                // onClick={}
                />
            </div>
          </div>
        </UpdateBooksModal>
      </div>
    );
  }
}

export default App;
