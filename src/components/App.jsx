import { Component } from "react";
import AppHeader from "./AppHeader";
import ItemStatusFilter from "./ItemStatusFilter";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

export default class App extends Component {
  state = {
    todos: [
      { label: "learn", done: false, important: false, id: 1 },
      { label: "build", done: false, important: false, id: 2 },
      { label: "enjoy", done: false, important: false, id: 3 },
      //   this.createTodo("learn"),
      //   this.createTodo("build"),
      //   this.createTodo("enjoy"),
    ],
  };

  counter = (step = 1) => {
    let start = 0;
    return () => (start += step);
  };

  inc = this.counter();

  generateUniqueId = () => {
    return new Date().getTime() * 1000 + this.inc();
  };

  createTodo = label => ({
    label,
    important: false,
    done: false,
    id: this.generateUniqueId(),
  });

  onAddTodoClick = (label = "new") => {
    const newTodo = this.createTodo("label");
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
    this.setState(({ todos }) => {
      return {
        todos: todos.reduce((acc, cur) => {
          if (cur.id === id) {
            cur = { ...cur, done: !cur.done };
          }
          return [...acc, cur];
        }, []),
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todos }) => {
      return {
        todos: todos.reduce((acc, cur) => {
          if (cur.id === id) {
            cur = { ...cur, important: !cur.important };
          }
          return [...acc, cur];
        }, []),
      };
    });
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
