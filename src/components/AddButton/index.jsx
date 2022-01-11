import "./addButton.scss";

const AddButton = props => {
  return (
    <button className="btn__add" onClick={props.onClick}>
      Добавить ученика
    </button>
  );
};

export default AddButton;
