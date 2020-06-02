import React, { Component } from 'react';
import './App.css';

// import Header from './Components/header'
import BookCard from './Books/BookCard';
import BookList from './Books/BookList'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      search : '',
      printType: "all",
      bookType: "no-filter",
      q: ' ',
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

search(inp) {
  console.log("Search entry is: ", inp);
  this.setState({
    search: inp
  });
}

handleSubmit(e) {
  e.preventDefault();
  console.log("submit handled!");
}


  componentDidMount() {
    
    let search = `${this.state.search}`;  
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes/';
    
    
    const API_Key='AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM';
    // `https://www.googleapis.com/books/v1/volumes?q=${searchEntry}&key=AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM`;
    
    let printType = `${this.state.isPrintType}`;
    let filter = 
    this.state.isBookType !== "no-filter"
      ? `$filter=${this.state.isBookType}`
      : "";
    const queryString = `${baseUrl}?q=${search}&${filter}&${printType}&key=${API_Key}`;
    
    console.log(queryString);
    

    fetch(queryString)
.then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error();
})
.then(responseJSon => {
  console.log(responseJSon);
  this.setState({
    searchResults: responseJSon.items
  });
})
.catch(e => {
  console.log(e);
  this.setState({ error: e.message });
});
}


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
    const page = this.state.showAddForm
          ? <BookList
                 showForm={show => this.setShowAddForm(show)} 
                 handleAdd={BookList => this.BookList(BookList)}/>
          : <BookCard BookCard={this.state.BookCard} showForm={show => this.setShowAddForm(show)}/>; 

    return (
      <div className="App">
        { page }
      </div>
    );
  }
}

export default App;


