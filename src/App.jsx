import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

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
      <TodoList todos={todos} />
      <SearchPanel />
    </>
  );
};

export default App;
