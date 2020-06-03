import React, {Component} from 'react'
import DisplayType from '../Display Type/displayType';

export default class GetBookType extends Component {
    render() {

        const selectOptions = this.props.selectOptions.bookSelections;
  
    
      const bookOptions = selectOptions.map((options, i) => (
    
        <option value={options} key={i}>
          {options}
        </option>
      ));
  
      console.log(bookOptions, "Book option");
      return (
        <div>
          <DisplayType
            bookOptions={bookOptions}
            printChangeHandler={this.props.bookChangeHandler}
          />
        </div>
      );
    }
  }