import React, {Component} from 'react'

export default class Search extends Component {

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
        <div className="searchBar">
        <section className="search_bar_container"></section>
    <form onSubmit={this.handleSubmit}>
        <input className="form-control" onChange={this.handleChange} placeholder="Search books" type="text"/>
        <button value={this.search} handleChange={this.handleSearch} ></button>
        <button type="submit">Search</button>
        </form>
        </div>
    );
}}  

