import AppHeader from "../components/AppHeader/AppHeader";
import ItemStatusFilter from "../components/ItemStatusFilter/ItemStatusFilter";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import TodoList from "../components/TodoList/TodoList";

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
