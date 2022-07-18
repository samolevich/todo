import { Component } from "react";
import AppHeader from "./AppHeader";
import ItemStatusFilter from "./ItemStatusFilter";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

export default class App extends Component {
  state = {
    todos: [
      { label: "learn", important: false, id: 1, done: false },
      { label: "build", important: true, id: 2, done: false },
      { label: "enjoy", important: false, id: 3, done: true },
    ],
  };

  counter = (step = 1) => {
    let start = 0;
    return () => (start += step);
  };

  inc = this.counter();

  generateUniqueId = () => {
    return new Date().getTime() + this.inc();
  };

  onAddTodoClick = () => {
    const newTodo = {
      label: `todo - ${this.inc()}`,
      important: false,
      done: false,
      id: this.generateUniqueId(),
    };

    this.setState(({ todos }) => ({
      todos: [...todos, newTodo],
    }));
  };

  onDeleteClick = id => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== id),
    }));
  };

  onToggleDone = id => {
    console.log("done", id);
    // this.setState(({ todos }) => ({ done: !done }));
  };

  onToggleImportant = id => {
    console.log("important", id);
    // this.setState(({ important }) => ({ important: !important }));
  };

  render() {
    const isLoggedIn = true;
    const loginBox = <span>Log in, please</span>;
    const welcomeBox = <span>Welcome Back</span>;

    return (
      <>
        {isLoggedIn ? welcomeBox : loginBox}
        <AppHeader />
        <ItemStatusFilter />
        <SearchPanel />
        <TodoList
          todos={this.state.todos}
          onToggleDone={this.onToggleDone}
          onDeleteClick={this.onDeleteClick}
          onToggleImportant={this.onToggleImportant}
        />
        <AddTodo onAddTodoClick={this.onAddTodoClick} />
      </>
    );
  }
}
