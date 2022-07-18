const AddTodo = ({ onAddTodoClick }) => {
  return (
    <button className="btn btn-outline-secondary" onClick={onAddTodoClick}>
      Add Todo
    </button>
  );
};

export default AddTodo;
