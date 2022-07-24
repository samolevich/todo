import { useDeferredValue, useEffect, useState } from "react";
import AppHeader from "./AppHeader";
import ItemStatusFilter from "./ItemStatusFilter";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [whatToShow, setWhatToShow] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const defferedSearchQuery = useDeferredValue(searchQuery);

  const counter = (step = 1) => {
    let start = 0;
    return () => (start += step);
  };

  const inc = counter();

  const generateUniqueId = () => new Date().getTime() * 1000 + inc();

  const createTodo = (label, important = false, done = false) => ({
    label,
    important,
    done,
    id: generateUniqueId(),
  });

  useEffect(() => {
    setTodos([
      createTodo("Learn HTML"),
      createTodo("Learn CSS"),
      createTodo("Learn JavaScript", true, true),
      createTodo("Learn React JS", true, false),
      createTodo("Learn Node JS", false, true),
    ]);
    // eslint-disable-next-line
  }, []);

  const onAddTodoClick = label => {
    if (!label.trim()) return;
    return setTodos([...todos, createTodo(label)]);
  };

  const onDeleteClick = id => setTodos(todos.filter(todo => todo.id !== id));

  const toggleProperty = (arr, id, propName) =>
    arr.reduce((acc, cur) => {
      if (cur.id === id) {
        cur = { ...cur, [propName]: !cur[propName] };
      }
      return [...acc, cur];
    }, []);

  const onToggleDone = id => setTodos(toggleProperty(todos, id, "done"));

  const onToggleImportant = id =>
    setTodos(toggleProperty(todos, id, "important"));

  const onFilterChange = filter => setWhatToShow(filter);

  const onChangeSearch = event => setSearchQuery(event.target.value);

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
  shownTodos = shownTodos.filter(({ label }) =>
    label.toLowerCase().includes(defferedSearchQuery.toLowerCase()),
  );

  return (
    <>
      <AppHeader {...stats} />
      <ItemStatusFilter
        whatToShow={whatToShow}
        onFilterChange={onFilterChange}
      />
      <SearchPanel searchQuery={searchQuery} onChangeSearch={onChangeSearch} />
      <TodoList
        todos={shownTodos}
        onToggleDone={onToggleDone}
        onDeleteClick={onDeleteClick}
        onToggleImportant={onToggleImportant}
      />
      <AddTodo onAddTodoClick={onAddTodoClick} />
    </>
  );
};

export default App;
