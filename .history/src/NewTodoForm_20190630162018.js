import React, { Component } from "react";
import uuid from "uuid";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      uuid: uuid()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text">New Todo</label>
          <input
            name="text"
            id="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button>ADD TODO</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
