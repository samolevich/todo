const ItemStatusFilter = ({ whatToShow, onFilterChange }) => {
  const buttons = ["all", "done", "active", "important"].map(btn => {
    const classNames =
      btn === whatToShow
        ? "filter-buttons__btn filter-buttons__btn_primary"
        : "filter-buttons__btn filter-buttons__btn_secondary";
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

  return <div className="filter-buttons">{buttons}</div>;
};

export default ItemStatusFilter;
