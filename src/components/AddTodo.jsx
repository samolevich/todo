import { Component } from "react";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      label: "",
    };
  }

  onValueChange = event => {
    this.setState(() => ({ label: event.target.value }));
  };

  onButtonSubmit = event => {
    event.preventDefault();
    this.props.onAddTodoClick(this.state.label);
    this.setState(() => ({ label: "" }));
  };

  render() {
    return (
      <form onSubmit={this.onButtonSubmit} className="add-todo-form">
        <input
          type="text"
          placeholder="Type to create new activity..."
          value={this.state.label}
          onChange={this.onValueChange}
          className="add-todo-form__input"
        />
        <button className="add-todo-form__button">Add</button>
      </form>
    );
  }
}

export default AddTodo;
