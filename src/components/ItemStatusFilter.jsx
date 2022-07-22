import { Component } from "react";

class ItemStatusFilter extends Component {
  render() {
    const { whatToShow, onFilterChange } = this.props;

    const buttons = ["all", "done", "active", "important"].map(btn => (
      <button
        className={
          btn === whatToShow ? "btn btn-primary" : "btn btn-outline-secondary"
        }
        type="button"
        key={btn}
        onClick={() => onFilterChange(btn)}
      >
        {btn.replace(/^\w/, c => c.toUpperCase())}
      </button>
    ));
    return <>{buttons}</>;
  }
}

export default ItemStatusFilter;
