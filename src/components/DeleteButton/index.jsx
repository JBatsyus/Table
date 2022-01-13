import "./deleteButton.scss";

const DeleteButton = props => {
  return (
    <button className="btn__del" onClick={props.onClick} title="Удалить">
      <span>&#10007;</span>
    </button>
  );
};

export default DeleteButton;
