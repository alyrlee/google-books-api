import  React, { Component}  from 'react'
import '../Books/Book'


class BookList extends Component {
render() {
    const Book = this
    .props
    .Book
    .map((Book, i) => <Book { ...Book } key={i}/>);
    return (
        <div className="BookList">
            {/* <Book /> */}
          {Book}
        </div>
      );
    }
  }
  
  BookList.defaultProps = {
    Book: []
  };
  
  export default BookList;
