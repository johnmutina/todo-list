import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {
          // TODO: add individual todos
        }
        <Todo />
        <NewTodoForm />
      </div>
    );
  }
}

export default TodoList;
