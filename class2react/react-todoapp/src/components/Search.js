import React, { Component } from "react";
import Newtodos from "./Newtodos";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      todoItemString: ""
    };
  }

  searchTodoItem = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { description } = this.state;

    return (
      <div>
        <input
          placeholder="search for..."
          name="description"
          value={description}
          type="text"
          onChange={this.searchTodoItem}
        />
        <p className="alert">{description}</p>
        <Newtodos />
      </div>
    );
  }
}

export default Search;
