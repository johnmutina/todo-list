import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ text: "Feed Cat" }]
    };
  }

  createNewTodo(todoObj) {}

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.state.todos.map(todo => (
          <Todo text={todo.text} id={todo.id} key={todo.id} />
        ))}
        <NewTodoForm />
      </div>
    );
  }
}

export default TodoList;
