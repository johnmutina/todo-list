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
        this.removeTodo = this.removeTodo.bind(this);
        this.updateText = this.updateText.bind(this);
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
    }

    editTodo(id) {
        console.log("edit");
        console.log(id);
    }

    removeTodo(id) {
        let filteredState = this.state.todos.filter(todo => todo.id !== id);
        this.setState({
            todos: [...filteredState]
        });
    }

    updateText(id, newText) {
        const newState = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: newText };
            } else {
                return todo;
            }
        });
        this.setState({ todos: newState });
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
                        editTodo={this.updateText}
                    />
                ))}
                <NewTodoForm createNewTodo={this.createNewTodo} uuid={uuid()} />
            </div>
        );
    }
}

export default TodoList;
