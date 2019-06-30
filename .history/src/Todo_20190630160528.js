import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

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
