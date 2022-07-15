const TodoListItem = ({ label, important }) => {
  const style = {
    color: important ? "tomato" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return <span style={style}>{label}</span>;
};

export default TodoListItem;
