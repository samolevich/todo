import { Component } from "react";

class TodoListItem extends Component {
  render() {
    const {
      label,
      done,
      important,
      onDeleteClick,
      onToggleImportant,
      onToggleDone,
    } = this.props;

    let classNames = "todo-list__item__label";
    if (done) classNames += " todo-list__item__label_done";
    if (important) classNames += " todo-list__item__label_important";

    return (
      <>
        <span className={classNames} onClick={onToggleDone}>
          {label}
        </span>
        <span className="todo-list__item__buttons">
          <button
            type="button"
            className="todo-list__item__button_important"
            onClick={onToggleImportant}
          >
            <img src="./img/exclamation-square.svg" alt="important icon" />
          </button>
          <button
            type="button"
            className="todo-list__item__button_delete"
            onClick={onDeleteClick}
          >
            <img src="./img/trash.svg" alt="delete icon" />
          </button>
        </span>
      </>
    );
  }
}

export default TodoListItem;
