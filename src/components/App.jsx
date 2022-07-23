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
        this.createTodo("Learn HTML"),
        this.createTodo("Learn CSS"),
        this.createTodo("Learn JavaScript"),
        this.createTodo("Learn React JS"),
        this.createTodo("Learn Node JS"),
      ],
      whatToShow: "all",
      searchQuery: "",
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

  onFilterChange = filter => {
    this.setState(() => ({ whatToShow: filter }));
  };

  onChangeSearch = event => {
    this.setState(() => ({
      searchQuery: event.target.value,
    }));
  };

  render() {
    const { todos, whatToShow, searchQuery } = this.state;

    const stats = todos.reduce(
      (acc, cur) => {
        acc.done += +cur.done;
        acc.important += +cur.important;
        return acc;
      },
      { done: 0, important: 0, len: todos.length },
    );

    let shownTodos = [];
    switch (whatToShow) {
      case "all":
        shownTodos = [...todos];
        break;
      case "important":
        shownTodos = todos.filter(({ important }) => important);
        break;
      case "done":
        shownTodos = todos.filter(({ done }) => done);
        break;
      case "active":
        shownTodos = todos.filter(({ done }) => !done);
        break;
      default:
        shownTodos = [...todos];
        break;
    }
    shownTodos = shownTodos.filter(({ label }) => label.includes(searchQuery));

    return (
      <>
        <AppHeader {...stats} />
        <ItemStatusFilter
          whatToShow={whatToShow}
          onFilterChange={this.onFilterChange}
        />
        <SearchPanel
          searchQuery={searchQuery}
          onChangeSearch={this.onChangeSearch}
        />
        <TodoList
          todos={shownTodos}
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
