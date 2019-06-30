import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import uuid from "uuid";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ text: "Feed Cat", id: uuid() }]
    };
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {
          // TODO: add individual todos
        }
        <Todo text={this.state.todos.text} />
        <NewTodoForm />
      </div>
    );
  }
}

export default TodoList;
