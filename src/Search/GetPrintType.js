import React, { Component } from "react";
import DisplayType from '../Display Type/displayType';

export default class GetPrintType extends Component {
  render() {
    
   
    const selectOptions = this.props.selectOptions.printSelections;
   
    const printOptions = selectOptions.map((options, i) => (

      <option value={options} key={i}>
        {options}
      </option>
    ));

    console.log(printOptions, "Print option");
    return (
      <div>
        <DisplayType
          bookOptions={printOptions}
          printChangeHandler={this.props.printChangeHandler}
        />
      </div>
    );
  }
}

