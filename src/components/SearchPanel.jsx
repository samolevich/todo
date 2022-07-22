const SearchPanel = ({ searchQuery, onChangeSearch }) => {
  const searchText = "Type here to search todo...";

  return (
    <input
      className="search"
      placeholder={searchText}
      value={searchQuery}
      onChange={onChangeSearch}
    />
  );
};

export default SearchPanel;
