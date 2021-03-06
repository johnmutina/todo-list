import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removeTodo(this.props.id);
  }

  render() {
    return (
      <div className="Todo">
        <h5>{this.props.text}</h5>
        <div>
          <button>Edit</button>
          <button onClick={this.handleClick}>X</button>
        </div>
      </div>
    );
  }
}

export default Todo;
