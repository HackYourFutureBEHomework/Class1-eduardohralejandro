import React, { Component } from "react";
import Moment from "react-moment";
import DatePicker from "react-date-picker";
import EditableLabel from "react-inline-editing";
class Newtodo extends Component {
  constructor() {
    super();
    this._handleFocus = this._handleFocus.bind(this);
    this._handleFocusOut = this._handleFocusOut.bind(this);
    this.state = {
      newTodo: "",
      message: "ReactInline demo",
      todos: [
        {
          title: "Get out of bed",
          deadline: new Date(),
          done: false
        },
        {
          title: "Brush teeth",
          deadline: new Date(),
          done: false
        },
        {
          title: "Eat breakfast",
          deadline: new Date(),
          done: false
        }
      ]
    };
  }

  _handleFocus(text) {
    console.log("Focused with text: " + text);
  }

  _handleFocusOut(text) {
    console.log("Left editor with text: " + text);
  }

  onsubmit = e => {
    e.preventDefault();
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
  };

  doneTodo = (e, index) => {
    const todos = [...this.state.todos];

    todos[index] = { ...todos[index] };
    todos[index].done = e.target.checked;
    this.setState({
      todos
    });
  };

  newTodoChanged = e => {
    this.setState({ newTodo: e.target.value });
  };

  onChange = (deadline, e) => this.setState({ deadline: deadline });

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.todo}</h1>
        <form onSubmit={e => this.onsubmit(e)}>
          <input
            onChange={e => this.newTodoChanged(e)}
            type="text"
            name="newTodo"
            placeholder="Enter todo"
            value={this.state.newTodo}
          />

          <DatePicker
            className="date"
            onChange={this.onChange}
            value={this.state.deadline}
          />

          <button type="submit">add todo</button>
        </form>

        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={todo.title}>
                <input
                  onChange={e => this.doneTodo(e, index)}
                  type="checkbox"
                />{" "}
                <span
                  style={{
                    textDecoration: todo.done ? "line-through" : "inherit"
                  }}
                />{" "}
                <span />
                <EditableLabel
                  text={todo.title}
                  labelClassName="myLabelClass"
                  inputClassName="myInputClass"
                  inputWidth="200px"
                  inputHeight="25px"
                  inputMaxLength="50"
                  labelFontWeight="bold"
                  inputFontWeight="bold"
                  onFocus={this._handleFocus}
                  onFocusOut={this._handleFocusOut}
                />
                it was posted on <span />
                <Moment format="YYYY/MM/DD">
                  {this.props.dateToFormat}
                </Moment>{" "}
                <button onClick={() => this.removeTodo(index)}>Remove</button>
                <span>
                  Deadline:{" "}
                  <DatePicker
                    onChange={this.onChange}
                    value={this.state.deadline}
                  />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Newtodo;
