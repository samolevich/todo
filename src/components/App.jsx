import AppHeader from "./AppHeader";
import ItemStatusFilter from "./ItemStatusFilter";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";

const App = () => {
  const todos = [
    { label: "learn", important: false, id: 1 },
    { label: "build", important: true, id: 2 },
    { label: "enjoy", important: false, id: 3 },
  ];
  const isLoggedIn = true;
  const loginBox = <span>Log in, please</span>;
  const welcomeBox = <span>Welcome Back</span>;
  return (
    <>
      {isLoggedIn ? welcomeBox : loginBox}
      <AppHeader />
      <ItemStatusFilter />
      <SearchPanel />
      <TodoList todos={todos} />
    </>
  );
};

export default App;
