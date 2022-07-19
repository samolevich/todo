import { Component } from "react";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <>
        <button type="button" className="btn btn-outline-secondary">
          All
        </button>
        <button type="button" className="btn btn-primary">
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Done
        </button>
      </>
    );
  }
}