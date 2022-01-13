import "./changeButton.scss";

const ChangeButton = props => {
  return (
    <button
      className="btn__change"
      onClick={props.onClick}
      title="Редактировать"
    >
      <span> &#128393;</span>
    </button>
  );
};

export default ChangeButton;
