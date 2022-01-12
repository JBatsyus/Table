import "./searchButton.scss";

const SearchButton = props => {
  return (
    <button className="btn__serch" onClick={props.onClick}>
      Найти
    </button>
  );
};

export default SearchButton;
