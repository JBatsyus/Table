// import ButtonDelete from "../buttons/ButtonDelete";
// import ButtonEdit from "../buttons/ButtonEdit";
// import ButtonSave from "../buttons/ButtonSave";

const Row = props => {
  return (
    <tr key={props.id}>
      <td>
        <input
          className="input__null"
          type="text"
          title="Фамилия"
          name="surname"
          pattern="^[А-Яа-я]+$"
          placeholder="Фамилия"
          required
        />
      </td>
      <td>
        <input
          className="input__null"
          type="text"
          title="Имя"
          name="name"
          pattern="^[А-Яа-я]+$"
          placeholder="Имя"
          required
        />
      </td>
      <td>
        <input
          className="input__null"
          type="text"
          title="Отчество"
          name="patronymic"
          pattern="^[А-Яа-я]+$"
          placeholder="Отчество"
          required
        />
      </td>
      <td>
        <input
          className="input__null"
          type="date"
          title="Дата рождения"
          name="hbty"
          pattern="^[А-Яа-я]+$"
          required
        />
      </td>
      <td>
        <input
          className="input__number"
          type="number"
          name="history"
          min="1"
          max="5"
          required
        />
      </td>
      <td>
        {" "}
        <input
          className="input__number"
          type="number"
          name="philosophy"
          min="1"
          max="5"
          required
        />
      </td>
      <td>
        <input
          className="input__number"
          type="number"
          name="informatics"
          min="1"
          max="5"
          required
        />
      </td>
      <td>
        <input
          className="input__number"
          type="number"
          name="economics"
          min="1"
          max="5"
          required
        />
      </td>
      <td>
        <input
          className="input__number"
          type="number"
          name="physics"
          min="1"
          max="5"
          required
        />
      </td>

      <td></td>
    </tr>
  );
};
export default Row;
