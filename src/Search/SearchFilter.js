import React, {Component} from 'react'

export default class SearchFilter extends Component {

constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A search was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    <div className="search-area">
     <section className="filter_bar_container"></section>
     <form>
        {/* <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} placeholder="Search books" type="text"/>
            <button type="submit">Search</button> */}
            {/* <select value={props.sort} onChange={props.handleSort} > */}
                {/* <option value="" disabled selected>Filter</option>      */}
            {/* </select> */}

<label>Print Type:</label>
<select 
    name="print-type-filter">
    <option 
        value="all">
        All
    </option>
    <option 
        value="books">
        Only Books
    </option>
    <option 
        value="magazines">
        Only Magazines
    </option>
</select>
</form>

<form> 
<label>Book Type:</label> 
<select 
    name="book-type-filter">
    <option 
        value="ebooks">
            All eBooks
    </option>
    <option 
        value="free-ebooks">
        Free eBooks
    </option>
    <option 
        value="paid-ebooks">
        Paid eBooks
        </option>
    <option 
        value="full">
        Fully Available eBooks
    </option>
    <option 
        value="partial">
        Partially Available eBooks
    </option>
</select>
</form> </div>
      
);
}
}

