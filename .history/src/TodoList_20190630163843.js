import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.createNewTodo = this.createNewTodo.bind(this);
  }

  createNewTodo(todoObj) {
    let uniqueId = uuid();
    let newTodo = {
      ...todoObj,
      id: uniqueId,
      key: uniqueId
    };
    this.setState(curState => ({
      todos: [...curState.todos, newTodo]
    }));
    console.log(this.state);
  }

  removeTodo(id) {
    console.log("Remove!");
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.state.todos.map(todo => (
          <Todo
            text={todo.text}
            id={todo.id}
            key={todo.id}
            removeTodo={this.removeTodo}
          />
        ))}
        <NewTodoForm createNewTodo={this.createNewTodo} uuid={uuid()} />
      </div>
    );
  }
}

export default TodoList;
