import { Component } from "react";

class ItemStatusFilter extends Component {
  render() {
    const { whatToShow, onFilterChange } = this.props;

    const buttons = ["all", "done", "active", "important"].map(btn => {
      const classNames =
        btn === whatToShow ? "btn btn-primary" : "btn btn-outline-secondary";
      const capitalizeBtn = btn.replace(/^\w/, c => c.toUpperCase());

      return (
        <button
          className={classNames}
          type="button"
          key={btn}
          onClick={() => onFilterChange(btn)}
        >
          {capitalizeBtn}
        </button>
      );
    });

    return <>{buttons}</>;
  }
}

export default ItemStatusFilter;
