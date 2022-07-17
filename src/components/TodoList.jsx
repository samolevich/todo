import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  const todoList = todos.map(({ id, ...todoProps }) => {
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...todoProps} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{todoList}</ul>;
};

export default TodoList;
