import { Component } from "react";

export default class TodoListItem extends Component {
  state = {
    done: this.props.done,
    important: this.props.important,
  };

  onLabelClick = () => {
    this.setState(({ done }) => ({ done: !done }));
  };

  onImportantClick = () => {
    this.setState(({ important }) => ({ important: !important }));
  };

  render() {
    const { done, important } = this.state;
    const { label, onDeleteClick } = this.props;

    let classNames = "todo-list-item";
    if (done) classNames += " text-decoration-line-through";
    if (important) classNames += " fw-bold";

    return (
      <>
        <span className={classNames} onClick={this.onLabelClick}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-sm btn-outline-success"
          onClick={this.onImportantClick}
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
