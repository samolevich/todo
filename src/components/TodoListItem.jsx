import { Component } from "react";

export default class TodoListItem extends Component {
  state = {
    done: false,
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
    let classNames = "todo-list-item";
    if (done) classNames += " text-decoration-line-through";
    if (important) classNames += " fw-bold";

    return (
      <>
        <span className={classNames} onClick={this.onLabelClick}>
          {this.props.label}
        </span>
        <button
          type="button"
          className="btn btn-sm btn-outline-success"
          onClick={this.onImportantClick}
        >
          important
        </button>
        <button type="button" className="btn btn-sm btn-outline-danger">
          delete
        </button>
      </>
    );
  }
}
