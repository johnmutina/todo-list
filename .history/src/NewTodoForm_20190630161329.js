import React, { Component } from "react";
import uuid from "uuid";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      uuid: uuid()
    };
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="todo-text">New Todo</label>
          <input name="todo-text" id="todo-text" value={this.state.text} />
          <button>ADD TODO</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
