import React, { Component } from 'react';
import './App.css';

// import Header from './Components/header'
import BookCard from './Books/BookCard';
import BookList from './Books/BookList';
import request from 'superagent';
import Search from './Search/Search';
import SearchFilter from './Search/SearchFilter';
import Book from './/Books/Book';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchEntry: 'harry+potter',
      printType: "all",
      bookType: "no-filter",
      showAddForm: false,
      data: null,
      error: null
    };
  }

    
setPrintSelected(sel) {
  console.log("Print Selected:", sel);
  this.setState({
    printType: sel
  });
}

setBookSelected(sel) {
  console.log(" BOOK selected:", sel);
  this.setState({
    bookType: sel
  });
}

searchInput(inp) {
  console.log("Search entry is:", inp);
  this.setState({
    searchEntry: inp
  });
}

handleSubmit(e) {
  e.preventDefault();
  console.log("submit handled!");
}

componentDidMount() {
  request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchEntry, key:'AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM' })
      .then((data) => {
          this.setState({ books: [...data.body.items] })
      })
}

handleSubmit = (e) => {
  e.preventDefault();
  request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchEntry, key:'AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM' })
      .then((data) => {
          console.log(data);
          this.setState({ books: [...data.body.items] })
  })
}

handleChange = (e) => {
  this.setState({ searchEntry: e.target.value })
}

handleSearchFilter = (e) => {
  this.setState({ sort: e.target.value});
}

//   componentDidMount() {
    
//     let searchEntry = `${this.state.searchEntry}`;
//     const baseUrl = "https://www.googleapis.com/books/v1/volumes/?q";
    
    
//     const API_Key='AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM';
//     // `https://www.googleapis.com/books/v1/volumes?q=${searchEntry}&key=AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM`;
//     let q =  `${this.state.searchEntry}`;
//     let printType = `${this.state.isPrintType}`;
//     let filter = 
//     this.state.isBookType !== "no-filter"
//       ? `$filter=${this.state.isBookType}`
//       : "";
//     const queryString = `${baseUrl}?q=${searchEntry}&${filter}&${printType}&key=${API_Key}`;
    
//     console.log(queryString);
    

//     fetch(queryString)
// .then(response => {
//   if (response.ok) {
//     return response.json();
//   }
//   throw new Error();
// })
// .then(responseJSon => {
//   console.log(responseJSon);
//   this.setState({
//     searchResults: responseJSon.items
//   });
// })
// .catch(e => {
//   console.log(e);
//   this.setState({ error: e.message });
// });
// }


  setShowAddForm(show) {
    this.setState({
      showAddForm: show
    });
  }

  BookList(booklist) {
    this.setState({
      booklist: [...this.state.booklist, booklist],
      showAddForm: false
    });
  }

  render() {
    // const page = this.state.showAddForm
    //       ? <BookList
    //              showForm={show => this.setShowAddForm(show)} 
    //              handleAdd={BookList => this.BookList(BookList)}/>
    //       : <BookCard BookCard={this.state.BookCard} />; 

    return (
      <div className="App">
       <Search />
       <SearchFilter />
       <Book />


      </div>
    );
  }
}

export default App;


