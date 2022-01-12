import "./search.scss";

import SearchButton from "../SearchButton/index.jsx";

const Search = () => {
  return (
    <div className="container">
      <input
        className="input__search"
        type="text"
        title="Поиск..."
        name="search"
        pattern="^[А-Яа-я]+$"
        placeholder="Поиск"
        required
      />
      <SearchButton></SearchButton>
    </div>
  );
};

export default Search;
