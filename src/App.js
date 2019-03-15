import React, { Component, Fragment } from 'react';
import logo from './logo.png';
import './App.css';
import AddBooks from './components/AddBooks';
import ShowBooks from './components/ShowBooks';
import Menu from './components/Menu';
import { Route, Switch } from 'react-router-dom';

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
      }
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

     booksArray
      .map((book, index)=> { 
       book.id = index; 
       console.log(book)
       return book;
        })
      .filter(book => console.log(book.genre.toUpperCase().includes(genreValue.toUpperCase())))
      .filter(book => console.log(book.title.toUpperCase().includes(nameValue.toUpperCase())));

    booksList = booksArray;

    return booksArray;
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
    
  render() {

    const { getTitleValue, getAuthorValue, getGenreValue, getPriceValue, submitBook, getSearchName, getSearchGenre, filterBooks, removeBook, form } = this;

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
                getSearchGenre={getSearchGenre}  filterBooks= {filterBooks()} removeBook={removeBook}/>
              )}/>
              <Route path="/AddBooks" render={()=>(<AddBooks getTitleValue={getTitleValue}getAuthorValue={getAuthorValue} getGenreValue={getGenreValue} getPriceValue={getPriceValue} submitBook={submitBook} form={form}/>)}/>
            </Fragment>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
