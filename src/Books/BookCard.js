import React, {Component} from 'react'
import  './Card.css'
import Search from '../Search/Search';
import SearchFilter from '../Search/SearchFilter'
import BookList from '../Books/BookList'


export default class BookCard extends Component {
  constructor(props) {
    super (props)
    this.state = {
      search: '',
      books: [],
      printType: "all",
      bookType: 'no-filter'
    }
  }
handleChange(field,value){
  this.setState({
    [field]: value
  });
}
render(){
    let formSubmit = (event) => {
      event.preventDefault();
    }
    return(
      <div className="BookCard">
      <form onSubmit={(e) => formSubmit(e)}>
        <Search
          BookList={this.props.BookList}
          search={this.state.search}
          change={(field,value) => this.handleChange(field, value)}/>
        <SearchFilter
          BookList={this.props.BookList}
          printType={this.state.printType}
          bookType={this.state.bookType}
          change={(field,value) => this.handleChnage(field, value)}/>  
        <BookList />
      </form>
      </div>
    )
}
}

// export default BookCard



// const BookCard = (props) => {
//   return (
//     <div className="BookCard">
//       <h1>
//         Book Results
//       </h1>
//       {/* //BookList */}
//       <h3>Book Title</h3>
//       <h3>Image</h3>
//       <h3>Book Author</h3>
//       <h3>Book ListPrice</h3>
//       <h3>Book Description</h3>
//       <h3>Preview Link</h3>
//     </div>
//    );
// } 

