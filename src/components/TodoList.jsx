import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos,
  onDeleteClick,
  onToggleDone,
  onToggleImportant,
}) => {
  const todoList = todos.map(({ id, ...todoItem }) => {
    return (
      <li key={id} className="todo-list__item">
        <TodoListItem
          {...todoItem}
          onToggleDone={() => onToggleDone(id)}
          onDeleteClick={() => onDeleteClick(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return <ul className="todo-list">{todoList}</ul>;
};

export default TodoList;
