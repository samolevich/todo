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

    let classNames = "todo-list__item-label";
    if (done) classNames = "todo-list__item-label_done";
    if (important) classNames = "todo-list__item-label_important";

    return (
      <>
        <span className={classNames} onClick={onToggleDone}>
          {label}
        </span>
        <span>
          <button
            type="button"
            className="btn btn-sm btn-outline-success"
            onClick={onToggleImportant}
          >
            important
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-danger"
            onClick={onDeleteClick}
          >
            delete
          </button>
        </span>
      </>
    );
  }
}

export default TodoListItem;
