import React, { Component } from "react";
import propTypes from "prop-types";
class Input extends Component {
  state = {
    check: true
  };

  onDone = e => {
    this.setState({ check: !this.state.check });
  };
  onDeleteClick = () => {
    this.props.deleteClickProperty();
  };

  render() {
    const { description, deadline } = this.props;
    const { check } = this.state;

    return (
      <div className="box">
        {check ? (
          <h1 className="todo-description">
            todo:
            {description}
            <i
              className="fas fa-times"
              style={{ cursor: "pointer", color: "red" }}
              onClick={this.onDeleteClick}
            />
          </h1>
        ) : (
          <div>
            <h1 className="checking">
              todo:
              {description}
            </h1>
          </div>
        )}

        <h1 className="todo-deadline">
          deadline:
          {deadline}
        </h1>
        <input type="checkbox" onClick={this.onDone} />
      </div>
    );
  }
}

Input.PropTypes = {
  deleteClickProperty: propTypes.func.isRequired
};
export default Input;
