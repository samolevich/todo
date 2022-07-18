import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos,
  onDeleteClick,
  onToggleDone,
  onToggleImportant,
}) => {
  const todoList = todos.map(({ id, ...todoItem }) => {
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...todoItem}
          onToggleDone={() => onToggleDone(id)}
          onDeleteClick={() => onDeleteClick(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{todoList}</ul>;
};

export default TodoList;
