import { Component } from "react";
import AppHeader from "./AppHeader";
import ItemStatusFilter from "./ItemStatusFilter";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        this.createTodo("learn"),
        this.createTodo("build"),
        this.createTodo("enjoy"),
      ],
    };
  }

  counter = (step = 1) => {
    let start = 0;
    return () => (start += step);
  };

  inc = this.counter();

  generateUniqueId = () => new Date().getTime() * 1000 + this.inc();

  createTodo = label => ({
    label,
    important: false,
    done: false,
    id: this.generateUniqueId(),
  });

  onAddTodoClick = label => {
    if (!label.trim()) return;
    this.setState(({ todos }) => ({
      todos: [...todos, this.createTodo(label)],
    }));
  };

  onDeleteClick = id => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== id),
    }));
  };

  toggleProperty = (arr, id, propName) => {
    return arr.reduce((acc, cur) => {
      if (cur.id === id) {
        cur = { ...cur, [propName]: !cur[propName] };
      }
      return [...acc, cur];
    }, []);
  };

  onToggleDone = id => {
    this.setState(({ todos }) => ({
      todos: this.toggleProperty(todos, id, "done"),
    }));
  };

  onToggleImportant = id => {
    this.setState(({ todos }) => ({
      todos: this.toggleProperty(todos, id, "important"),
    }));
  };

  render() {
    const isLoggedIn = true;
    const loginBox = <span>Log in, please</span>;
    const welcomeBox = <span>Welcome Back</span>;
    const { todos } = this.state;
    const stats = todos.reduce(
      (acc, cur) => {
        acc.done += +cur.done;
        acc.important += +cur.important;
        return acc;
      },
      { done: 0, important: 0, len: todos.length },
    );

    return (
      <>
        {isLoggedIn ? welcomeBox : loginBox}
        <AppHeader {...stats} />
        <ItemStatusFilter />
        <SearchPanel />
        <TodoList
          todos={todos}
          onToggleDone={this.onToggleDone}
          onDeleteClick={this.onDeleteClick}
          onToggleImportant={this.onToggleImportant}
        />
        <AddTodo onAddTodoClick={this.onAddTodoClick} />
      </>
    );
  }
}

export default App;
