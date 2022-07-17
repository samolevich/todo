import { Component } from "react";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: this.props.important,
  };

  onLabelClick = () => {
    this.setState(() => ({ done: !this.state.done }));
  };

  onImportantClick = () => {
    this.setState(() => ({ important: !this.state.important }));
  };

  render() {
    const { label } = this.props;
    // const style = {
    //   color: this.state.important ? "tomato" : "black",
    //   fontWeight: this.state.important ? "bold" : "normal",
    // };
    let classNames = "todo-list-item";
    if (this.state.done) classNames += " text-decoration-line-through";
    if (this.state.important) classNames += " fw-bold";

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
        <button type="button" className="btn btn-sm btn-outline-danger">
          delete
        </button>
      </>
    );
  }
}
