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

  generateUniqueId = () => {
    return new Date().getTime() * 1000 + this.inc();
  };

  createTodo = label => ({
    label,
    important: false,
    done: false,
    id: this.generateUniqueId(),
  });

  onAddTodoClick = () => {
    this.setState(({ todos }) => ({
      todos: [...todos, this.createTodo("new todo")],
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

export default App;
