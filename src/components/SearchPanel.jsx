const SearchPanel = ({ searchQuery, onChangeSearch }) => {
  const searchText = "Type here to search...";
  const searchStyle = {
    fontSize: "20px",
  };
  return (
    <input
      style={searchStyle}
      placeholder={searchText}
      value={searchQuery}
      onChange={onChangeSearch}
    />
  );
};

export default SearchPanel;
