import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {
          // TODO: add individual todos
        }
        <NewTodoForm />
      </div>
    );
  }
}

export default TodoList;
