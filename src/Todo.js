import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            text: this.props.text
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    handleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    handleClick() {
        this.props.removeTodo(this.props.id);
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.editTodo(this.props.id, this.state.text);
        this.setState({
            isEditing: false
        });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    toggleCompletion() {
        this.setState({
            completed: !this.state.completed
        });
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form onSubmit={this.handleUpdate}>
                        <input
                            name="text"
                            id="text"
                            value={this.state.text}
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div className="Todo">
                    <li
                        onClick={this.toggleCompletion}
                        className={this.state.completed && "Todo-completed"}
                    >
                        {this.props.text}
                    </li>
                    <div>
                        <button onClick={this.handleEdit}>Edit</button>
                        <button onClick={this.handleClick}>X</button>
                    </div>
                </div>
            );
        }
        return result;
    }
}

export default Todo;
