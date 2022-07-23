import { useState } from "react";

const AddTodo = ({ onAddTodoClick }) => {
  const [label, setLabel] = useState("");

  const onValueChange = event => {
    setLabel(event.target.value);
  };

  const onButtonSubmit = event => {
    event.preventDefault();
    onAddTodoClick(label);
    setLabel("");
  };

  return (
    <form onSubmit={onButtonSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="Type to create new activity..."
        value={label}
        onChange={onValueChange}
        className="add-todo-form__input"
      />
      <button className="add-todo-form__button">Add</button>
    </form>
  );
};

export default AddTodo;
