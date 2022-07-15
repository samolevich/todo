const TodoListItem = ({ label, important }) => {
  const style = {
    color: important ? "tomato" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <span className="todo-list-item" style={style}>
      {label}
      <button type="button" className="btn btn-sm btn-outline-success">
        important
      </button>
      <button type="button" className="btn btn-sm btn-outline-danger">
        delete
      </button>
    </span>
  );
};

export default TodoListItem;
