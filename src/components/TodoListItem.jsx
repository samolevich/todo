import { Component } from "react";

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      done,
      important,
      onDeleteClick,
      onToggleImportant,
      onToggleDone,
    } = this.props;

    let classNames = "todo-list-item";
    if (done) classNames += " text-decoration-line-through";
    if (important) classNames += " fw-bold";

    return (
      <>
        <span className={classNames} onClick={onToggleDone}>
          {label}
        </span>
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
      </>
    );
  }
}
