import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removeTodo();
  }

  render() {
    return (
      <div className="Todo">
        <h5>{this.props.text}</h5>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default Todo;
