const AppHeader = ({ done, important, len }) => {
  return (
    <>
      <h1 className="title">Todo List</h1>
      <p className="statistics">{`Important: ${important} Done: ${done} Total: ${len}`}</p>
    </>
  );
};

export default AppHeader;
