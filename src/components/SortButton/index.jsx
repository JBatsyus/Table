import "./index.scss";

const SortButton = props => {
  return (
    <div className="container__sort">
      <button
        className="btn__sort"
        onClick={props.onClick}
        title="По возрастанию"
      >
        ▲
      </button>
      <button className="btn__sort" onClick={props.onClick} title="По убыванию">
        ▼
      </button>
    </div>
  );
};

export default SortButton;
