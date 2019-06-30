import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEdit() {
    this.props.editTodo(this.props.id);
  }

  handleClick() {
    this.props.removeTodo(this.props.id);
  }

  render() {
    return (
      <div className="Todo">
        <h5>{this.props.text}</h5>
        <div>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleClick}>X</button>
        </div>
      </div>
    );
  }
}

export default Todo;
