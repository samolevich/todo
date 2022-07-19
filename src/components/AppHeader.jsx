const AppHeader = ({ done, important, len }) => {
  return (
    <>
      <h1>Todo List</h1>
      <p>{`Important: ${important} Done: ${done} Total: ${len}`}</p>
    </>
  );
};

export default AppHeader;
