import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  const todoList = todos.map(({ id, ...todoProps }) => {
    return (
      <li key={id}>
        <TodoListItem {...todoProps} />
      </li>
    );
  });

  return <ul>{todoList}</ul>;
};

export default TodoList;
