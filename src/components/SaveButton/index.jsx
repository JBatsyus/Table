import "./saveButton.scss";

const SaveButton = props => {
  return (
    <button className="btn__save" onClick={props.onClick} title="Cохранить">
      <span>✓</span>
    </button>
  );
};

export default SaveButton;
