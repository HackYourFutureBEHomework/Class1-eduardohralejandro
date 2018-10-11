import React, { Component } from "react";
import Input from "./Input";

class Newtodos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          description: "Get out of bed",
          deadline: "2017-09-11",
          done: true
        },
        {
          id: 2,
          description: "Brush teeth",
          deadline: "2017-09-10",
          done: true
        },
        {
          id: 3,
          description: "Eat breakfast",
          deadline: "2017-09-09",
          done: true
        }
      ]
    };
  }

  deleteItem = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    const emptyMessage = todos.filter(todo => todo.id !== [0]);

    this.setState({
      todos: newTodos,
      emptyMessage
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <p className="alert">
          {" "}
          {this.state.emptyMessage ? "hey add more" : this.state.emptyMessage}
        </p>
        {todos.map(todo => (
          <Input
            key={todo.id}
            description={todo.description}
            deadline={todo.deadline}
            done={todo.done}
            deleteClickProperty={this.deleteItem.bind(this, todo.id)}
          />
        ))}
      </div>
    );
  }
}

export default Newtodos;
