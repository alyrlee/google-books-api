import React, { Component } from 'react';
// import './FilterOptions.css';

class FilterOptions extends Component {


  render() {
    return (
        <div className="filter_bar_container">
            <form >
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
            </form> 
        </div>
    );
}
}

export default FilterOptions;
