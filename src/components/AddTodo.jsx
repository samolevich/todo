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
      <form onSubmit={this.onButtonSubmit}>
        <input
          type="text"
          placeholder="add new todo"
          value={this.state.label}
          onChange={this.onValueChange}
        />
        <button className="btn btn-outline-secondary">Add Todo</button>
      </form>
    );
  }
}

export default AddTodo;
