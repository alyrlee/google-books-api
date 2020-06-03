import React, { Component } from 'react';


const Search= (props) => {

    return (
        <div className="search-area">
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} placeholder="Search books" type="text"/>
            <button type="submit">Search</button>
            </form>
        </div>
      
    );
}

export default Search;



// import React, {Component} from 'react'

// // import GetBookType from './GetBookType'
// // import GetPrintType from './GetPrintType'

// export default class Search extends Component {

// constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A search was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

// render() {
//     return (
//         <div className="searchBar">
//         <section className="search_bar_container"></section>
//         <label className="searchEntry" htmlFor="search">
//             Search:
//           </label>
//           <input
//             type="text"
//             name="search"
//             id="search"
//             placeholder="charles"
//             onChange={inp => this.props.handleSearchInput(inp.target.value)}
//           />

//           <input type="submit" value="Submit" />
      

//         {/* <label htmlFor="printType">Print Type:</label>
//         <GetPrintType
//           selectOptions={this.props.selectOptions}
//           printChangeHandler={this.props.printChangeHandler}
//         />

       
//         <label htmlFor="bookType">Book Type:</label>
//         <GetBookType
//           selectOptions={this.props.selectOptions}
//           bookChangeHandler={this.props.bookChangeHandler}
//         /> */}
//         </div>
//     );
// }}  

