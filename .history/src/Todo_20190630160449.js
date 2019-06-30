import React, { Component } from "react";

class Todo extends Component {
  handleClick() {}
  render() {
    return (
      <div>
        <h5>{this.props.text}</h5>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default Todo;
