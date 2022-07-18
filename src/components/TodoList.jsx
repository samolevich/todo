import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onDeleteClick }) => {
  const todoList = todos.map(({ id, ...todoItem }) => {
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...todoItem} onDeleteClick={() => onDeleteClick(id)} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{todoList}</ul>;
};

export default TodoList;
