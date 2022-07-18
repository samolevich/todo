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
    this.setState(({ todos }) => ({
      todos: [
        ...todos,
        {
          label: "new",
          important: false,
          done: false,
          id: this.generateUniqueId(),
        },
      ],
    }));
  };

  onDeleteClick = id => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== id),
    }));
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
        <TodoList todos={this.state.todos} onDeleteClick={this.onDeleteClick} />
        <AddTodo onAddTodoClick={this.onAddTodoClick} />
      </>
    );
  }
}
